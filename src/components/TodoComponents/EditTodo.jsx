import { Input, Button } from "reactstrap";

const EditTodo = ({ editText, onEditText, onSaveEdit }) => {
  return (
    <div className="d-flex w-100" style={{ gap: "0.5rem" }}>
      <Input
        type="text"
        value={editText}
        onChange={(e) => onEditText(e.target.value)}
      />
      <Button color="success" onClick={onSaveEdit}>
        Save
      </Button>
    </div>
  );
};

export default EditTodo;
