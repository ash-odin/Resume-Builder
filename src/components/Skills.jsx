import { useState } from "react";
import SkillsForm from "./SkillsForm.jsx";

function Skills({ resume, handleInput, category }) {
  const [showForm, setShowForm] = useState(false);
  const [indexToShow, setIndexToShow] = useState(-1);

  const toggleShowForm = (index) => {
    setShowForm(!showForm);
    setIndexToShow(index);
  };

  return (
    <>
      <div className="formCategory" id="skills">
        <h2>Skills and interests</h2>
        <div className="contents">
          {/* Show the form if toggleShowForm is true */}
          {showForm && (
            <SkillsForm
              resume={resume}
              index={indexToShow}
              handleInput={handleInput}
              category={category}
              toggleShowForm={toggleShowForm}
            />
          )}
          {/* Otherwise show list of experience as buttons */}
          {!showForm &&
            resume["skills"].map((item, index) => (
              <button key={item.skill} onClick={() => toggleShowForm(index)}>
                {item.skill}
              </button>
            ))}
          {/* Afterwards, show add button to add skill */}
          {!showForm && (
            <button id="addSkill" onClick={() => toggleShowForm()}>
              + Skill or Interest
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Skills;
