function Hozyaeva() {
  const amount = ['1', '2', '3', '4'];

  return (
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group me-2" role="group" aria-label="First group">
        <p className="text">Количеcтво хозяев:</p>
        {amount.map((amountName) => (
          <button type="button" className="btn btn-primary">
            {amountName}
          </button>
        ))}

        <button type="button" className="btn btn-primary">
          более 4х
        </button>
      </div>
    </div>
  );
}

export default Hozyaeva;
