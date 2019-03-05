# 챗봇 대화 만들기

Clova Chatbot이 사용자 사이의 대화를 어떤 유형으로 분석하고 이에 대해 어떻게 응답할지 [미리 정의한 챗봇 대화 모델](/Design/Design_Guideline_For_Chatbot_Extension.md#DefineDialogueModel)에 따라 챗봇 대화를 만듭니다.

챗봇 대화는 Chatbot 창에서 만듭니다. Chatbot 창을 실행하는 방법은 다음과 같습니다.

1. <a href="https://developers.naver.com/console/clova/" target="_blank">Clova Developers Console</a>에서 **Clova Extensions Kit β**를 클릭해 <a href="https://developers.naver.com/console/clova/cek/#/list" target="_blank">CEK 메뉴 페이지</a>로 이동합니다.
2. 챗봇 대화를 만들 Clova Chatbot의 **대화 모델** 항목에서 **수정**을 클릭합니다.
<img src="/DevConsole/Resources/Images/DevConsole-Interaction_Model_Menu.png" />

위 단계를 수행하면 챗봇 대화를 만들 수 있는 Chatbot 창이 아래와 같이 열립니다.

![](/DevConsole/Resources/Images/DevConsole-Chatbot_Window.png)

<div class="note">
  <p><strong>Note!</strong></p>
  <p>여기서부터 챗봇 콘솔 사용법은 NAVER Cloud Platform에서 제공하는 <a href="http://docs.ncloud.com/ko/chatbot/chatbot-1-2.html" target="_blank">Chatbot 문서</a>를 참고합니다.</p>
  <p>Clova chatbot용 콘솔은 NAVER Cloud Platform에서 제공하는 Chatbot 콘솔 대비 일부 기능이 지원되지 않거나 다릅니다.</p>
  <ul>
    <li>태스크 메뉴 - 미지원</li>
    <li>자동테스트 메뉴 - 미지원</li>
    <li>대화기록 메뉴 - 미지원</li>
    <li>재학습 메뉴 - 미지원</li>
    <li>작업 기록 메뉴 - 미지원</li>
    <li><strong>공통 메시지 메뉴에 대한 내용은 <a href="#SetCommonMessages">공통 메시지 설정</a>을 참고합니다.</strong></li>
    <li>그 외 공통 메뉴라도 부분으로 UI에 차이가 있을 수 있습니다.</li>
  </ul>
</div>

## 공통 메시지 설정 {#SetCommonMessages}

Clova chatbot용 콘솔에서 공통 메시지를 설정하는 방법은 NAVER Cloud Platform의 Chatbot용 콘솔과 조금 다릅니다. Clova chatbot에서는 콘솔의 **채널 연동** 설정에서 공통 메시지(답변)를 설정할 수 있습니다. 대화 구분없이 인사말이나 실패 메시지는 모든 대화에서 공통으로 사용될 수 있습니다. 공통 메시지는 다음과 같이 설정할 수 있습니다.

1. **챗봇 설정** > **채널 연동** 메뉴에서 Clova 항목을 누릅니다.
<img src="/DevConsole/Resources/Images/DevConsole-Channel_Settings.png" />
2. 인사 메시지와 실패 메시지를 입력합니다.
<img src="/DevConsole/Resources/Images/DevConsole-Set_Common_Messages.png" />


<div class="note">
  <p><strong>Note!</strong></p>
  <p><strong>채널 연동</strong> 메뉴에서 채널별 설정할 수 있는 공통 메시지는 다음과 같습니다.</p>
  <ul>
    <li>Clova: 인사 메시지, 실패 메시지</li>
    <li>LINE: 실패 메시지</li>
    <li>TalkTalk: 실패 메시지</li>
  </ul>
</div>
