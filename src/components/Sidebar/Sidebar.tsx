import Content from 'src/components/Sidebar/Content';
import Header from 'src/components/Sidebar/Header';

export default function Sidebar() {
  return (
    <div className="flex flex-col w-2/6 max-w-md max-h-96">
      <nav className="flex-none">
        <Header />
      </nav>
      <div className="flex-none">
        <Content />
      </div>
    </div>
  );
}
