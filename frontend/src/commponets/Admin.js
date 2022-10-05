import Button from "@material-ui/core/Button";

const Admin = ({
  stream,
  myVideo,
  leaveCall,
  callAccepted,
  callEnded,
  receivingCall,
  answerCall,
}) => {
  //   const [me, setMe] = useState("");
  //   const [stream, setStream] = useState();
  //   const [receivingCall, setReceivingCall] = useState(false);
  //   const [caller, setCaller] = useState("");
  //   const [callerSignal, setCallerSignal] = useState();
  //   const [callAccepted, setCallAccepted] = useState(false);
  //   const [idToCall, setIdToCall] = useState("");
  //   const [callEnded, setCallEnded] = useState(false);
  //   const [name, setName] = useState("");
  //   const myVideo = useRef();
  //   const userVideo = useRef();
  //   const connectionRef = useRef();

  //   useEffect(() => {
  //     debugger;

  //     navigator.mediaDevices
  //       .getUserMedia({ video: true, audio: true })
  //       .then((stream) => {
  //         setStream(stream);
  //         debugger;
  //         myVideo.current.srcObject = stream;
  //       });

  //     socket.on("me", (id) => {
  //       debugger;
  //       setMe(id);
  //     });

  //     socket.on("callUser", (data) => {
  //       debugger;
  //       setReceivingCall(true);
  //       setCaller(data.from);
  //       setName(data.name);
  //       setCallerSignal(data.signal);
  //     });
  //   }, []);

  //   const callUser = (id) => {
  //     const peer = new Peer({
  //       initiator: true,
  //       trickle: false,
  //       stream: stream,
  //     });
  //     peer.on("signal", (data) => {
  //       socket.emit("callUser", {
  //         // userToCall: id,
  //         userToCall: me,
  //         signalData: data,
  //         from: me,
  //         name: name,
  //       });
  //     });
  //     peer.on("stream", (stream) => {
  //       userVideo.current.srcObject = stream;
  //     });
  //     socket.on("callAccepted", (signal) => {
  //       setCallAccepted(true);
  //       peer.signal(signal);
  //     });

  //     connectionRef.current = peer;
  //   };

  //   const answerCall = () => {
  //     setCallAccepted(true);
  //     const peer = new Peer({
  //       initiator: false,
  //       trickle: false,
  //       stream: stream,
  //     });
  //     peer.on("signal", (data) => {
  //       socket.emit("answerCall", { signal: data, to: caller });
  //     });
  //     peer.on("stream", (stream) => {
  //       userVideo.current.srcObject = stream;
  //     });

  //     peer.signal(callerSignal);
  //     connectionRef.current = peer;
  //   };

  //   const leaveCall = () => {
  //     setCallEnded(true);
  //     connectionRef.current.destroy();
  //   };

  return (
    <main>
      <h1 style={{ textAlign: "center", color: "#fff" }}>Admin calling</h1>
      <div className="container">
        <div className="video-container">
          <div className="video">
            {stream && (
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                style={{ width: "310px" }}
              />
            )}
          </div>
        </div>

        <div className="myId">
          <div className="">
            {callAccepted && !callEnded ? (
              <Button variant="contained" color="secondary" onClick={leaveCall}>
                End Call
              </Button>
            ) : null}
          </div>
        </div>
        <div>
          {receivingCall && !callAccepted ? (
            <div className="caller">
              <h1> Private No calling...</h1>
              <Button variant="contained" color="primary" onClick={answerCall}>
                Answer
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default Admin;
