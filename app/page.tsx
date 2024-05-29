import { action } from "./action";

export default function Home() {
  return (
    <form action={action}>
      <button className="bg-blue-300 p-4 text-white">Submit</button>
    </form>
  );
}
