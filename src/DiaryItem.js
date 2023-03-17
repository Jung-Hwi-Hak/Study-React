import { useRef, useState } from "react";

// const DiaryItem = ({ author, content, created_date, emotion, id }) => {
const DiaryItem = ({ diaryListMap, onRemove, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(diaryListMap.content);

  const localContentInput = useRef();
  /**
   * 일기장 item 삭제 함수
   */
  const handleRemove = () => {
    if (
      window.confirm(`${diaryListMap.id}번째 일기를 정말 삭제하시겠습니까?`)
    ) {
      onRemove(diaryListMap.id);
    }
  };

  /**
   * 일기장 수정 취소
   */
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(diaryListMap.content);
  };

  /**
   * 일기장 수정 완료
   */
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      alert("본문의 길이는 최소 5글자 이상 작성해주셔야 합니다.");
      return;
    }

    if (window.confirm(`${diaryListMap.id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(diaryListMap.id, localContent);
      toggleIsEdit();
    }
  };

  /**
   * return 컴포넌트
   */
  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author">
          작성자 : {diaryListMap.author} | 감정점수 : {diaryListMap.emotion}
        </span>
        <br />
        <span className="date">
          {new Date(diaryListMap.created_date).toLocaleString()}
        </span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            ></textarea>
          </>
        ) : (
          <>{diaryListMap.content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제</button>
          <button onClick={toggleIsEdit}>수정</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
