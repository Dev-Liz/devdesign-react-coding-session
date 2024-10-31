function Popup() {
  return (
    <>
      <div className="">
        <div className="title">
          <h1>Are you absolutely sure?</h1>
        </div>
        <div className="content">
          <p>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </div>
        <div className="buttons">
          <buttton className="secondary">Cancel</buttton>
          <buttton className="primary">Continue</buttton>
        </div>
      </div>
    </>
  )
}

export default Popup
