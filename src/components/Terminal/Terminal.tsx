const Terminal = () => {
    return (
        <iframe
            src="http://localhost:9090" // URL of the other app
            width="100%" // Adjust width as needed
            height="100%" // Adjust height as needed
            title="External App"
            style={{ border: "none" }}
        />
    );
};

export default Terminal;
