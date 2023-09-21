import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RouteContext } from "./contexts/RouteContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Job = () => {
  const { table } = useContext(RouteContext);
  const { title } = useParams();
  const jobs = useSelector((state) => state.jobs);

  if (!title && !jobs[title]) {
    return (
      <div>
        <h1>존재하지 않는 직업입니다.</h1>
        <Link to="/intro">소개 페이지</Link>
      </div>
    );
  }

  const { skills } = jobs[title];

  const skillList = skills.map((skill) => (
    <tr>
      <td>{skill}</td>
    </tr>
  ));

  return (
    <div>
      <table style={table}>
        <thead>
          <tr>
            <th>기술</th>
          </tr>
        </thead>
        <tbody>{skillList}</tbody>
      </table>
      <Link to="/intro">소개 페이지</Link>
    </div>
  );
};

export default Job;
