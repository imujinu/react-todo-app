import { useSelector } from "react-redux";

export default function DoneList() {
  // 완료 목록 불러오고
  const doneList = useSelector((state) => state.todo.list).filter(
    (el) => el.done === true
  );

  // console.log(doneList);
  return (
    <section>
      <h3>완료 목록</h3>
      <ul>
        {doneList.map((el) => {
          return (
            <li key={el.id}>
              {el.text}
              <button>X</button>
              <button>수정하기</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
