import React from 'react';

const Item = ({ item }) => {
  const { title } = item;
  const { level } = item;
  const style = {
    width: `${item.level}%`,
    // width: item.level,
  };

  return (
    <div className="set">
      <h3>{title}</h3>
      <div className="barlevel">
        <div className="progress" style={style} l={level}>
          {`${level} %`}
        </div>
      </div>
    </div>
  );
};

const Skill = ({ data }) => (
  <>
    <div className="skills">
      <h2>front end</h2>
      {data.map((e) => (
        <Item key={e.id} item={e} level={e.level} />
      ))}
    </div>
  </>
);

export default Skill;
