import { handleActions } from "redux-actions"

const initialState = {
  jobs: {
    developer: {
      name: "한동석",
      skills: ["React.js", "Node.js"]
    },
    planner: {
      name: "홍길동",
      skills: ["Excel", "PowerPoint"]
    }
  }
}

const route = handleActions({}, initialState);

export default route;