/*
import React, { Component } from 'react';
import './smartInput.css';


class SmartInput extends React.Component {
  constructor(props) {
    // 부호객체 생성자 호출
    super(props);

    // 맴버변수 정의
    this.state = {
      id: props.id,
    };
  }

  // 랜더링 함수 
  render() {
    console.log('render');

    // 다시 그려야 할 때마다 불려지는 함수 (변경된 사항이 있을때마다 호출됨)
    // 아마도 VIRTUAL DOM을 내부적으로 호출하는 것 같음 (확인필요)
    return (
        <div className="SMART_INPUT_WRAP">
            <input className="SMART_INPUT" type={this.props.inputType} placeholder={this.props.placeholder}></input>
        </div>
    );
  }
}


// 외부에서 사용할 수 있도록 Export시킴
export default SmartInput;
*/

import React, { Component } from 'react';
import './smartInput.css';


class SmartInput extends Component {
    constructor(props) {
        // 부호객체 생성자 호출
        super(props);

        // 맴버변수 정의
        this.state = {
            m_id: props.id,
        };
    }

    onChangeValue = (e) => {
        this.props.onChangeDataForParents(this.state.m_id, e.target.value);
    }

    // 랜더링 함수 
    render() {
        console.log('render');

        // 다시 그려야 할 때마다 불려지는 함수 (변경된 사항이 있을때마다 호출됨)
        // 아마도 VIRTUAL DOM을 내부적으로 호출하는 것 같음 (확인필요)
        return (
            <div className="SMART_INPUT_WRAP">
                <input className="SMART_INPUT" type={this.props.inputType} placeholder={this.props.placeholder} 
                        onChange={this.onChangeValue}></input>
            </div>
        );
    }
}


// 외부에서 사용할 수 있도록 Export시킴
export default SmartInput;

