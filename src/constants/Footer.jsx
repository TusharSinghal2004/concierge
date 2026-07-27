export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "1.5rem",
    backgroundColor: "#1a1a1a",
    color: "#aaa",
    marginTop: "2rem",
  },
  text: {
    margin: 0,
    fontSize: "0.9rem",
  },
};