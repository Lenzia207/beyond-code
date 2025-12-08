export default function BackgroundEffect() {
  return (
    <>
      <div className="absolute inset-0 gradient-radial-blue pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none"></div>
    </>
  );
}
