# 응답 설정

챗봇 대화에는 사용자 질문 유형과 그에 대한 답변 그리고 사전 타입을 등록할 수 있을 뿐만 아니라 응답에 대해 다음과 같은 것들을 설정할 수 있습니다.

* 첫 인사 메시지
* 시스템 또는 서비스 장애에 따른 오류 메시지
* 사용자 질문 인식을 확신하는 정도에 따른 답변 구간

## 메시지 설정 {#ConfigureResponseMessage}

첫인사 메시지와 사용자 질문을 인식하지 못 했을 때 메시지, 오류 메시지를 설정하는 방법은 다음과 같습니다.

1. Clova Chatbot 창의 메뉴에서 **설정**을 클릭합니다.
2. **설정** 화면에서 **메시지** 탭을 클릭합니다.
3. **기본 메시지 설정**에서 연필 모양의 버튼을 클릭한 다음 메시지를 입력합니다.  
<img src="/DevConsole/Resources/Images/ConfigureResponseSettings_Message.png" />
   - 첫 인사: 사용자가 Clova Chatbot 사용을 시작했을 때 전달할 간단한 인사나 사용법에 대한 안내 문구입니다.
   - 잘 모를 때: 사용자의 질문이 미리 정의해 둔 질문 유형 중 어느 것으로도 식별될 수 없어 답변이 불가능하다고 판단했을 때 전달할 문구입니다. 판단 기준은 **언어모델** 탭에서 설정합니다.
   - 에러/장애: 시스템 또는 서비스에 장애가 발생할 때 제공할 오류 메시지입니다.
4. **저장**을 클릭해 설정 내용을 적용합니다.

## 답변 옵션 {#ConfigureAction}

액션이 있는 답변 유형에 사용할 액션을 미리 설정해 놓을 수 있습니다. 액션을 설정하는 방법은 다음과 같습니다.

1. Clova Chatbot 창의 메뉴에서 **설정**을 클릭합니다.
2. **설정** 화면에서 **답변 옵션** 탭을 클릭합니다.
3. **새로운 ACTION** 버튼을 클릭합니다.
4. 액션의 이름을 입력하고 원하는 액션 유형을 선택한 다음 필요한 정보를 입력합니다. 단, 액션의 이름은 띄어쓰기 없이 입력해야 합니다(예: `피자크기선택`).  
<img src="/DevConsole/Resources/Images/ConfigureResponseSettings_Action.png" />
   - GET: URL에 포함된 정보를 Extension 서버에 보내 오디오를 듣는 등 특정한 액션을 실행하도록 설정합니다. Extension 서버에 관한 내용은 <a href="https://developers.naver.com/docs/clova/guide/" target="_blank">Clova 플랫폼 가이드 문서</a>에서 "<a href="https://developers.naver.com/docs/clova/guide/CEK/Guides/Build_Custom_Extension.md" target="_blank">Custom extension 만들기</a>"를 참고합니다.
   - JSON: JSON 형식의 정보를 Extension 서버에 보내 오디오를 듣는 등 특정한 액션을 실행하도록 설정합니다. Extension 서버에 관한 내용은 <a href="https://developers.naver.com/docs/clova/guide/" target="_blank">Clova 플랫폼 가이드 문서</a>에서 "<a href="https://developers.naver.com/docs/clova/guide/CEK/Guides/Build_Custom_Extension.md" target="_blank">Custom extension 만들기</a>"를 참고합니다.
   - FORM: 사용자가 선택하거나 정보를 입력할 수 있는 항목을 설정합니다.
5. **저장** 버튼을 클릭합니다.

## 사용자 질문 인식 설정 {#ConfigureResponseAccuracy}

사용자는 다양한 표현으로 이야기할 수 있기 때문에 Clova는 사용자의 질문을 확률적으로 판단해 전달합니다.

사용자의 질문을 확신하는 정도에 따라 답변 구간을 나누고 그에 따라 어떤 메시지를 전달할지 설정하는 방법은 다음과 같습니다.

<div class="note"><p><strong>Note!</strong></p>
<p>질문 인식 설정은 Clova Chatbot의 서비스 품질에 영향을 미치므로 꼭 필요한 경우에만 사용합니다.</p></div>

1. Clova Chatbot 창의 메뉴에서 **설정**을 클릭합니다.
2. **설정** 화면에서 **언어모델** 탭을 클릭합니다.
3. **언어 모델 설정**에서 슬라이드 막대를 움직여 답변 범위와 가중치를 설정합니다.  
<img src="/DevConsole/Resources/Images/ConfigureResponseSettings_Model.png" />
   - 답변 범위: Clova Chatbot의 답변 정확도입니다. 값이 100에 가까워질수록 정확한 답변을 전달하지만 질문이 조금이라도 명확하지 않으면 답변을 전달하지 않습니다. 값이 0에 가까워질수록 엉뚱한 답변이라도 항상 답변을 전달합니다.
   - 가중치: 여러 가지 언어 모델 중에 특정 모델에서 추론된 답변값에 가중치를 주어 Clova Chatbot의 답변을 조정합니다. **모델 A**는 입력한 데이터의 양이 많을 때 유리한 모델입니다. **모델 B**는 네이버의 다양한 학습데이터를 활용한 모델로, 입력한 데이터가 적을 때에도 답을 찾을수 있도록 합니다.
   - 형태소: 챗봇의 답변 범위를 설정하는 기준입니다.
4. **저장**을 클릭해 설정 내용을 적용합니다.

