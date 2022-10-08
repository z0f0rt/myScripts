export function LeftWindow(props) {
    console.log(props);
    if (props.isOpen) {
      return (
        <div className="LeftWindow">
          <button
            className="WindowButton"
            onClick={() => props.setisLeftPanelOpen(false)}
          >
            X
          </button>
        </div>
      );
    }
    return <div></div>;
  }
  