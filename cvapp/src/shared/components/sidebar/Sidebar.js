import './Sidebar.css';

function Sidebar(props) {
  const content = 'This is a Content'

  return (
    <div className="Sidebar">

      <div className="Sidebar-wrapper">

        <div className="Sidebar-title">
          <h1>{props.title}</h1>
        </div>

        <div className="Sidebar-subtitle">
          <h3>{props.subtitle}</h3>
        </div>

        <div className="Sidebar-content">
          <h5>{content}</h5>
        </div>

      </div>

    </div>
  );
}

export default Sidebar;
