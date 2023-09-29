const Map = (props) => {
  return (
    <div className="map">
      <iframe
        width="600"
        height="450"
        src={props.src}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;


