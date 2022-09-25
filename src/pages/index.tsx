export default function Home() {
  const todayDate = new Date();
  return (
    <div className="h-scree w-screen flex flex-col justify-center items-center">
      <div className="text-3xl text-center pt-16">To-Do Contest</div>
      <div className="text-cxl text-center pt-4 pb-16">
        {todayDate.getDate()} / {todayDate.getMonth() + 1} /{" "}
        {todayDate.getFullYear()}
      </div>
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div>Player 1</div>
        <div>Player 2</div>
      </div>
    </div>
  );
}
