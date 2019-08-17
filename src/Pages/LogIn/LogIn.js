import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import SmartInput from '../../Components/smartInput/smartInput.js';
import './LogIn.css';


class Login extends Component {
  constructor(props) {
    // 부호객체 생성자 호출
    super(props);

    // 맴버변수 정의
    this.state = {
      IDValue: "",
      PWValue: "",
    };

    // 생성자 호출 상태 확인
    console.log('constructor');
  }

  // 자신의 객체에서 발생되는 이벤트 함수
  onCompleteClick = (e) => {
    console.log("[ COMPLETE CLICK ]", e.target.value);
    alert(`LOG IN 버튼이 눌렸습니다. \n    ID:${this.state.IDValue} \n    PW:${this.state.PWValue}`);
  }

  // 자식 객체에서 이벤트가 발생되었을때 호출되는 Callback함수
  onChangeDataForParents = (e/*id, dataFromChild*/) => {
    // 자식 컴포넌트에서 받은 값을 이용한 로직 처리
    // ID관련 데이터
    /*
    if(id === "0"){
      this.setState({IDValue: dataFromChild});
    }
    else if(id === "1"){
      this.setState({PWValue: dataFromChild});
    }
    */
    this.setState(
      {[e.target.name]: e.target.value,}
    );
  }

  goToMainMenu() {
    this.props.history.push('/');
  }

  
  // 랜더링 함수 
  render() {
    console.log('render');

    // 다시 그려야 할 때마다 불려지는 함수 (변경된 사항이 있을때마다 호출됨)
    // 아마도 VIRTUAL DOM을 내부적으로 호출하는 것 같음 (확인필요)
    return (
      <div 
        className="LOGIN_WRAP"
      >
        <div 
          id="TITLE_CONTAINER"
        >
          {/* 정적생성영역 */}
          <div 
            className="TITLE"
          >
            Log in to Miniter
          </div>

        </div>

        <div 
          id="LOGIN_INPUT_CONTAINER">
          {/* 사용자 정의 컴포넌트 생성부분 */}
          <SmartInput 
            className="SMART_INPUT" 
            name="IDValue" 
            id="0" 
            inputType="text" 
            placeholder="Enter ID" 
            onChangeDataForParents={this.onChangeDataForParents}
          >
          </SmartInput>

          <SmartInput 
            className="SMART_INPUT" 
            name="PWValue" 
            id="1" 
            inputType="password" 
            placeholder="Password" 
            onChangeDataForParents={this.onChangeDataForParents}
          >
          </SmartInput>
        </div>

        <div 
          id="BUTTON_CONTAINER"
        >
          {/* 정적생성영역 (추후 동적으로 생성되도록 수정 예정) */}
          <button 
            id="LOGIN_COMPLETE" 
            onClick={this.onCompleteClick}
          >
            LOG IN
          </button>

          {/* Routs을 이용하여 바로 접근하는 부분이 YERI KIM님 블로그에 React 6에 있음 */}
          {/*<Link id="LOGIN_CANCEL" to="/">CANCEL</Link>*/}

          <button 
            id="LOGIN_CANCEL" 
            onClick={this.goToMainMenu.bind(this)}
          >
            CANCEL
          </button>
          
        </div>
      </div> 
    );
  }
}


// 외부에서 사용할 수 있도록 Export시킴
export default withRouter(Login);
