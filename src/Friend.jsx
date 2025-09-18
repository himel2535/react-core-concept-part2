export default function Friend({ friend }) {
    
  const { name,email,phone } = friend;

  const cardStyle = {
    border: "2px solid gold",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  };
  return (
    <div style={cardStyle}>
      <h3>Name:{name}</h3>
      <h4>E-mail:{email}</h4>
      <h4>Contact:{phone}</h4>
    </div>
  );
}
