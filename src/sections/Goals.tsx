/* eslint-disable react/no-unescaped-entities */
const notes = [
  { text: "product strategy" },
  { text: "user research" },
  { text: "unity" },
  { text: "3D animation" },
];

export const Notes = () => {
  return (
    <section>
      <div className="container">
        <div className="tag">Goals</div>
        <h2 className="section-title">What I'm working towards</h2>
        <p className="section-description">
          On the road to a Product Design Prototyper role, these to-do's are my
          North Star, stepping stones to reach my goal.
        </p>
      </div>
    </section>
  );
};
