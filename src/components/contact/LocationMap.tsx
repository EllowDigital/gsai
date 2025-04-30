const LocationMap = () => {
  return (
    <div className="mt-16 px-4 text-center contact-animate opacity-0">
      <h3 className="text-2xl font-semibold text-white">Our Location</h3>
      <div className="w-24 h-1 bg-gsai-red mx-auto mt-4 mb-8"></div>
      <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7127555156358!2d81.02444217597154!3d26.912609860094033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999596def6ea9c7%3A0x23d2ceb539bff92!2sGhatak%20Sports%20Academy%20India!5e0!3m2!1sen!2sin!4v1739461937485!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
          }}
          allowFullScreen
          loading="lazy"
          title="GSAI Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
