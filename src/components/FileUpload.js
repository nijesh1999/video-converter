import React, { Fragment, useState } from "react";

export default function Fileupload() {
  const [filename, setFilename] = useState("");
  const [show, setLoading] = useState(true);
  const [btn, setbtn] = useState(false);
  const helloHandeler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow(!show);
    }, 2000);
  };

  const getFile = (e) => {
    let a = e.target.files[0].name;
    setFilename(a);
  };
  const style = {
    width: "3rem",
    height: "3rem",
    color: "blue",
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="container-fluid col-md-8">
          <br></br>
          <h1 className="page-header">
            Video converting .mp4 to Hls file format
          </h1>
          <hr />
          <br />
          <div className="custom-file mb-4">
            <h4 className="center">Select file</h4>
            <input
              type="file"
              accept="video/mp4,video/x-m4v,video/*"
              className="custom-file-input"
              id="customFile"
              onChange={getFile}
            />
            <p>only accept .mp4 file</p>
          </div>

          <button
            onClick={helloHandeler}
            type="button"
            disabled={filename ? false : true}
            class="btn btn-primary btn-block"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            convert
          </button>

          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="container-fluid col-md-4">
                    {show ? (
                      <>
                        <div className="text-center">
                          <div
                            className="spinner-border"
                            style={style}
                            role="status"
                          ></div>
                          <p>converting...</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-center">
                          <h2>Success</h2>
                          <button
                            data-dismiss="modal"
                            className="btn btn-success btn-lg btn-block"
                          >
                            Download
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </Fragment>
  );
}
