export default function NoNotification() {
  return (
    <div className="w-full flex items-center h-[35rem] justify-center flex-col space-y-5">
      <img src="/img/icon/bell.png" className="w-[10rem]" />
      <h1 className="flex flex-col items-center space-y-4">
        <span className="block text-2xl font-bold">
          No Notification Right Now ?
        </span>
        <span className="block text-lg">You’re up-to-date</span>
      </h1>
    </div>
  );
}
