import React, { useState } from "react";
// import ModalComponent from "../Modal/Modal";
import Modal from "react-bootstrap/Modal";
import { useHistory, Link } from "react-router-dom";

const InstallToolsCard = ({ name, image, description, linkName }) => {
  const [modalShowContent, setModalShowContent] = useState(false);
  // console.log(linkName);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="bg-gray-400"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className="bg-gray-200">
            <div className="flex space-x-16 mx-5 py-3">
              <div className="flex flex-col space-y-3">
                <div className="font-bold pb-2 ">ToolDescription</div>
                <div className="p-10 bg-white rounded-lg">
                  <img src={props.image} alt="" className="w-20" />
                </div>
                <div className="flex flex-col  space-y-2 ">
                  <button className="p-1 bg-green-500 text-white rounded-md">
                    Add to Zuri
                  </button>
                  <button className=" p-1 bg-white text-green-500 ring-1 ring-green-500 rounded-md">
                    Learn More
                  </button>
                </div>
                <div>
                  <div className="font-bold text-xs text-gray-500">
                    Supported Language
                  </div>
                  <div className="text-gray-500 text-xs">English</div>
                </div>
                <div>
                  <div className="font-bold text-xs text-gray-500">Pricing</div>
                  <div className="text-gray-500 text-xs">Currently Free</div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="text-lg font-bold">{props.name}</div>
                <div>
                  <img src={"/screenshot.png"} alt="" className="w-80" />
                </div>
                <div>
                  Google Drive lets you store files securely online, access them
                  from anywhere, and collaborate with others. Add the Google
                  Drive app to create Google Docs, import any type of file from
                  Google Drive, and get notifications on new comments, files,
                  and access requests — all without leaving your conversations
                  in Slack.
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

  const history = useHistory();

  const handleClick = () => {
    history.push(`/${linkName}`);
  };
  return (
    <div>
      <Link to={`/${linkName}`}>
        <div className="flex ">
          <div className="bg-white flex w-full p-3 justify-center items-center space-x-4 rounded-lg cursor-pointer">
            <div className=" p-1 border border-gray-300 rounded-lg ">
              <img src={image} alt="" width={50} />
            </div>
            <div className="space-y-1">
              <div className="font-bold text-sm">{name}</div>
              <div className="text-xs">{description}</div>
            </div>
          </div>
        </div>
      </Link>
      {/* <MyVerticallyCenteredModal
        show={modalShowContent}
        onHide={() => setModalShowContent(false)}
        name={name}
        image={image}
      /> */}
    </div>
  );
};

export default InstallToolsCard;
