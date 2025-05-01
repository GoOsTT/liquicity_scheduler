// ... your imports remain unchanged
import { useState, useMemo } from 'react';
import './index.css';
import { createEvents } from 'ics';
import { Button } from "@/components/ui/button";
import { Alert } from '@/lib/Alert';
import { Artist, artistsByDay } from '@/artistsByDay';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

type Event = {
  start: [number, number, number, number, number]; // [year, month, day, hour, minute]
  duration: { hours: number };
  title: string;
  description: string;
  location: string;
};

const App = () => {
  const [selectedEvents, setSelectedEvents] = useState<Artist[]>([]);
  const [alert, setAlert] = useState<boolean>(false);

  const sortedArtistsByDay = useMemo(() => {
    const sorted: typeof artistsByDay = {};
  
    for (const [day, stages] of Object.entries(artistsByDay)) {
      sorted[day] = {};
  
      for (const [stage, artists] of Object.entries(stages)) {
        sorted[day][stage] = [...artists].sort((a, b) => {
          const aTime = new Date(...a.startTime).getTime();
          const bTime = new Date(...b.startTime).getTime();
          return aTime - bTime;
        });
      }
    }
  
    return sorted;
  }, []);

  const isSelected = (artist: Artist) =>
    selectedEvents.some((e) => e.id === artist.id);

  const toggleArtist = (artist: Artist) => {
    if (isSelected(artist)) {
      setSelectedEvents((prev) => prev.filter((e) => e.id !== artist.id));
    } else {
      setSelectedEvents((prev) => [...prev, artist]);
    }
  };

  const handleDownloadAll = () => {
    const events: Event[] = selectedEvents.map((artist) => ({
      start: artist.startTime,
      duration: { hours: 1 },
      title: `${artist.name} at ${artist.stage}`,
      description: `${artist.name} live performance`,
      location: artist.stage,
    }));

    if (events.length === 0) {
      setAlert(true);
      return;
    }

    createEvents(events, (error, value) => {
      if (error) {
        console.log(error);
        return;
      }

      const blob = new Blob([value], {
        type: 'text/calendar;charset=utf-8',
      });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'festival_schedule.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const clearSelectedEvents = () => {
    setSelectedEvents([]);
  };

  return (
    <div className="p-6 font-sans min-h-screen bg-[#0a0a0f] text-[#f5f5f5]">
      <h1 className="text-2xl font-bold mb-6 text-yellow-400 text-center">
        Liquicity 2025 Lineup Scheduler
      </h1>
  
      {Object.entries(sortedArtistsByDay).map(([day, artists]) => (
        <div key={day} className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-[#ffd700]">{day}</h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Galaxy', 'Solar', 'Lunar'].map((stage) => {
              const stageArtists = artists[stage]
                .filter((artist: Artist) => artist.stage === stage)
                .sort((a, b) => {
                  const aTime = a.startTime[3] * 60 + a.startTime[4];
                  const bTime = b.startTime[3] * 60 + b.startTime[4];
                  return aTime - bTime;
                });
  
              return (
                <div key={stage}>
                  <Collapsible>
                    <CollapsibleTrigger className="bg-[#1e103f] text-[#ffd700] p-3 rounded-md w-full text-center hover:bg-[#2a1659] font-semibold">
                      {stage}
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {stageArtists.length > 0 ? (
                        <ul className="space-y-3 mt-4">
                          {stageArtists.map((artist: Artist, index: number) => {
                            const selected = isSelected(artist);
                            return (
                              <li
                                key={index}
                                className={`border rounded-lg p-4 flex justify-between items-center transition-colors duration-200 ${
                                  selected
                                    ? 'bg-[#5c2e91] border-yellow-400 text-white'
                                    : 'bg-[#16131f] hover:bg-[#221b35] border-[#3e2b69]'
                                } cursor-pointer`}
                                onClick={() => toggleArtist(artist)}
                              >
                                <span>
                                  <strong>{artist.name}</strong> — {artist.startTime[3]}:
                                  {artist.startTime[4].toString().padStart(2, '0')}
                                </span>
                                <Button
                                  className={`ml-4 ${
                                    selected
                                      ? 'bg-yellow-400 text-black'
                                      : 'bg-[#5c2e91] text-white hover:bg-[#7035aa]'
                                  }`}
                                >
                                  {selected ? 'Added (click to remove)' : 'Add'}
                                </Button>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <p className="mt-4 text-sm text-gray-400 italic">No artists on this stage</p>
                      )}
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              );
            })}
          </div>
        </div>
      ))}
  
      <div className="flex flex-col gap-4 mt-10 w-full max-w-md mx-auto">
        <Button
          onClick={clearSelectedEvents}
          variant="secondary"
          disabled={selectedEvents.length === 0}
          className="bg-[#1e103f] text-white hover:bg-[#2a1659] w-full"
        >
          Clear All Selections
        </Button>
        <Button
          onClick={handleDownloadAll}
          className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 font-bold w-full"
        >
          Download Schedule (.ics)
        </Button>
      </div>
  
      <Alert handleAlertClose={setAlert} alertState={alert} />
  
      <div className="mt-10 flex justify-center">
        <a href="https://www.buymeacoffee.com/goost" target="_blank" rel="noopener noreferrer">
          <img
            className="w-48 hover:opacity-80 transition-opacity"
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
          />
        </a>
      </div>
    </div>
  );
          }

export default App;
