import React, { useEffect, useState } from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import styled from 'styled-components'
import Preview from './Preview';
import CardEditor from './CardEditor';
import { useSelector } from 'react-redux';
import { database } from '../../service/firebase';
import { useNavigate } from 'react-router-dom';
import { off, onValue, ref, remove, set } from 'firebase/database';

const MakerDiv=styled.div`
    width:100%;
    height:100%;
    max-width:80rem;
    display:flex;
    flex-direction:column;
    background-color:white;
    
`;
const ContainerDiv=styled.div`
    display:flex;
    flex:1;  /* 가득채운다라는 뜻 */
    min-height:0;
    
  }
`
const CardManager = ({FileInput}) => {
  //레알타임데이타베이스 추가
  console.log(database)
  //userId를 활용
  //localstorage에 담아놓고 사용하고있는데
  //다른방법 써보자
  const userId = window.localStorage.getItem("userId")
  console.log(userId)
  useEffect(()=>{
    //사용자별 네임카드 관리위해 트리에 root로 userId를 사용
    //다시 card아래 생성된 시간을 10진수로 받아서 라벨로 사용
    const starCountRef = ref(database, `${userId}/card)`);
    onValue(starCountRef, (snapshot) => {
      //검색정보가 담김
    const data = snapshot.val();
    console.log(data)
    //검색된 정보를 실시간으로 화면과 동기화 처리를 위해서
    //stateHook에 초기화 해야한다 그래야 값이 바뀔 때 화면도 리렌더링된다
    return()=> off(starCountRef)//useEffect안에 return넣으면
    });
  },[])
  const navigateState=useNavigate().state;
  //auth객체 사용위해 -실제 사용: userAuth.auth
  const {userAuth}=useSelector(store=>store)
  //페이지가렌더링 될 때 한 번 요청하기
  //조회처리 전에 userId를 쥐고 있어야 함 -현재는 localstorage에 있음
  //의존성배열에 userId를 넣으면 망함 userId가 바뀔 떄에만 실행이 되는데 localstorage에서 쥐고있기 때문에
    const [cards, setCards] = useState({
        
    });
    const createOrUpdateCard= card=>{
      console.log(userId)
      setCards(cards=>{
        const updated={...cards}
        //어차피 id가 오브젝트에 없다면 새로운 것이 추가됨
        //그래서 addCard는 필요 없음
       updated[card.id]=card 
       return updated
      })
      console.log(card.id)
      set(ref(database, `${userId}/card${card.id}`),card)
    }
//데이터 셋은 CardManager에 있다 원본은 건들지않는다 복사본 사용-> 삭제 추가 수정하겠다
//삭제버튼은 CardEditorForm 에 존재
//삭제 대상 card도 CardEditorForm에 존재
//자바스크립트도 파라미터 사용 가능
//파라미터값은 언제 어디서 결정? ->>> 사용자가 delete버튼 누를 때
//그 때 deleteCard함수 호출 및 파라미터로 card전달 받을 수 있다.
//해당 변수는 함수이다 왜냐하면 소문자이니까 만약 대문자라면 컴포넌트이다
//삭제대상이 되는 정보를 가진 card파라미터는 CardEditorForm에서 올라옴-버블링

const deleteCard =card=>{//삭제하고자 하는 카드를 여기서 결정할 수 없어 어디서 결정? CardEditorForm에 button눌리면 알 수 있어
  console.log(card)
  setCards(cards=>{//리렌더링 즉시 이때 호출되는 함수 =return()-> 함수안에 컴포넌트가 화면에출력 ==rendering react가/// dataset은 스프링이 
    //스프링부트에서 넘어오는 데이터셋은 useState와 대응된다 = 변화시킨다 -> rendering
    const updated={...cards}//spread syntax 깊은복사
    delete updated[card.id]
    return updated//복사본이 리턴된다 깊은복사
  })
    remove(ref(database,`${userId}/card/${card.id}`))
}

  return (
    <MakerDiv>
        <Header/>
        <ContainerDiv>
            <CardEditor FileInput={FileInput} cards={cards} deleteCard={deleteCard}
              addCard={createOrUpdateCard}
              updatedCard={createOrUpdateCard}
              />
            <Preview cards={cards}/>
        </ContainerDiv>
        <Footer/>
    </MakerDiv>
   
  )
}

export default CardManager
