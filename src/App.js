import "./App.css";
import Card from "./Card";
import { questions } from "./questions";

function App() {
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <Card key={question.id} cardData={question} />
      ))}
    </div>
  );
}

export default App;
