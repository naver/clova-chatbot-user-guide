# 챗봇 대화 만들기

Clova Chatbot이 사용자의 질문을 어떤 유형으로 분석하고 이에 대해 어떻게 응답할지 [미리 정의한 챗봇 질문](/Design/Design_Guideline_For_Chatbot_Extension.md#DefineInteractionModel)에 따라 챗봇 대화를 만듭니다.

## Clova Chatbot 창 실행 {#OpenDashboard}

챗봇 대화는 Clova Chatbot 창에서 만듭니다. Clova Chatbot 창을 실행하는 방법은 다음과 같습니다.

1. <a href="https://developers.naver.com/console/clova/" target="_blank">Clova Developers Console</a>의 <a href="https://developers.naver.com/console/clova/cek/#/list" target="_blank">CEK 메뉴 페이지</a>에서 챗봇 대화를 만들 Clova Chatbot의 **Interaction 모델** 항목에서 **수정**을 클릭합니다.  
<img src="/DevConsole/Resources/Images/DevConsole-Interaction_Model_Menu.png" />
2. 다음과 같은 Clova Chatbot 창이 열립니다.  
<img src="/DevConsole/Resources/Images/DevConsole-Interaction_Model_Dashboard.png" />
3. 다음 항목을 수행해 [Clova Chatbot을 디자인하는 과정](/Design/Design_Guideline_For_Chatbot_Extension.md)에서 정의한 챗봇 질문을 등록합니다.
   - [사용자 질문 유형 추가](#AddUserRequestType)
   - [질문 유형별 답변 추가](#AddResponsesAndURLInfo)
   - [사전 타입 추가](#AddDictionary)
   - [응답 설정](#ConfigureResponseSettings)

## 사용자 질문 유형 추가 {#AddUserRequestType}

사용자의 질문 유형은 '[챗봇 질문 정의](/Design/Design_Guideline_For_Chatbot_Extension.md#DefineInteractionModel)'에서 정의한 것으로, 질문 예시와 그에 대한 응답으로 구성되어 있습니다.

예를 들어 '가입 문의'에 대한 사용자 질문 유형은 다음과 같이 추가할 수 있습니다.

1. Clova Chatbot 창의 메뉴에서 **챗봇 만들기 > 질문 및 답변**을 클릭합니다.
2. **질문 그룹 만들기** 화면의 질문 그룹 목록 위에 있는 **그룹 추가**를 클릭합니다.  
<img src="/DevConsole/Resources/Images/DevConsole-Add_User_Request_Type_1.png">
3. **질문 그룹 생성** 대화 상자에서 새로운 질문 그룹의 이름을 입력하고 **생성**을 클릭합니다.
4. 미리 정의해 둔 질문 예시를 **학습을 위한 예시문장**의 입력란에 입력하고 **Enter** 키를 누릅니다.  
<img src="/DevConsole/Resources/Images/DevConsole-Add_User_Request_Type_2.png" />
5. 필요한 사용자 질문 예시를 더 입력해 가입 문의에 대한 사용자 질문 유형을 만듭니다.

사용자 질문 유형을 모두 추가한 다음에는 [질문 유형별 답변](#AddResponsesAndURLInfo)을 추가하거나 [사전 타입](/DevConsole/Guides/CEK/Add_Dictionary.md)을 추가합니다.

그리고 위의 동작을 반복해 사용자 질문 유형을 계속 추가할 수 있습니다.

## 질문 유형별 답변 추가 {#AddResponsesAndURLInfo}

Clova Chatbot은 특정 사용자 질문 유형에 대해 다음과 같이 답변을 제공할 수 있습니다.

* 등록된 단일의 답변을 제공
* 등록된 복수의 답변 중 하나를 제공
* 사용자의 요청마다 난수를 생성해 등록된 복수의 답변 중 임의의 답변 하나를 제공

두 번째와 세 번째 방법은 답변을 제공하기 위해서 사용자 질문 유형에 답변을 추가해야 합니다. 

다음을 수행해 답변을 추가합니다.

1. Clova Chatbot 창의 메뉴에서 **챗봇 만들기 > 질문 및 답변**을 클릭합니다.
2. **질문 그룹 만들기** 화면의 질문 그룹 목록에서 답변을 추가할 질문 그룹을 클릭합니다.  
<img src="/DevConsole/Resources/Images/DevConsole-Add_Response_1.png" />
3. 사용자 발화 상세 화면의 **챗봇 답변**에서 **새로운 답변 추가**를 클릭합니다.  
<img src="/DevConsole/Resources/Images/DevConsole-Add_Response_2.png" />
4. 추가로 표시되는 답변 유형 중에 원하는 유형에 답변을 입력합니다.
   - 답변 유형 1: 문장을 답변으로 제공합니다.  
   <img src="/DevConsole/Resources/Images/DevConsole-Add_Response_Type_1.png" />
   - 답변 유형 2: 문장과 함께 이동할 수 있는 URL을 답변으로 제공합니다.  
   <img src="/DevConsole/Resources/Images/DevConsole-Add_Response_Type_2.png" />
   - 답변 유형 3: 문장과 함께 사용자가 선택할 수 있는 항목을 제시합니다.  
   <img src="/DevConsole/Resources/Images/DevConsole-Add_Response_Type_3.png" />
   - 답변 유형 4: 문장과 함께 오디오를 듣는 등 특정한 액션을 실행합니다.  
   <img src="/DevConsole/Resources/Images/DevConsole-Add_Response_Type_4.png" />
   - 답변 유형 5: 문장과 함께 Extension 서버에 정보를 보내 오디오를 듣는 등 특정한 액션을 실행합니다. Extension 서버에 관한 내용은 <a href="https://developers.naver.com/docs/clova/guide/" target="_blank">Clova 플랫폼 가이드 문서</a>에서 "<a href="https://developers.naver.com/docs/clova/guide/CEK/Guides/Build_Custom_Extension.md" target="_blank">Custom extension 만들기</a>"를 참고합니다.  
   <img src="/DevConsole/Resources/Images/DevConsole-Add_Response_Type_5.png" />  
5. 필요한 답변을 추가한 다음 답변 제공 방식을 선택합니다.  
<img src="/DevConsole/Resources/Images/DevConsole-Add_Response_3.png" />
   - 하나의 답변만 제공하려면 답변 목록 위의 **Random**을 선택 해제하고 제공할 답변의 ON/OFF 상태를 **ON**으로 설정합니다.
   - 임의의 답변을 무작위로 제공하려면 답변 목록 위의 **Random**을 선택하고 모든 답변의 ON/OFF 상태를 **ON**으로 설정합니다.
6. 답변의 제공 형태를 선택합니다.  
<img src="/DevConsole/Resources/Images/DevConsole-Add_Response_4.png" />
   - 음성 형태로 답변을 제공하려면 답변 목록 위의 **Clova**를 선택합니다.
   - 텍스트 형태로 답변을 제공하려면 답변 목록 위의 **Text**를 선택합니다.

## 템플릿으로 챗봇 대화 만들기 {#RegisterInteractionModelUsingTemplate}

자주 사용하는 유형의 챗봇을 서비스할 때는 템플릿으로 손쉽게 챗봇 대화를 만들 수 있습니다. Clova Chatbot은 다음과 같은 유형의 템플릿을 제공합니다.

* 고객센터 FAQ 봇
* 일상 대화 봇
* 은행/증권/보험 등 금융 봇
* 셀럽/스타 봇
* 푸드/요리/식당 봇
* 가족/어린이 봇
* 병원/건강/약 봇
* 만화/게임/캐릭터 봇
* 상식/백과사전/퀴즈 봇
* 쇼핑 봇

템플릿으로 챗봇 대화를 만드는 방법은 다음과 같습니다.

1. Clova Chatbot 창 메뉴에서 **챗봇 만들기 > 질문 및 답변**을 클릭합니다.
2. **유용한 템플릿 추가하기**에서 원하는 챗봇 유형의 버튼을 클릭합니다.  
<img src="/DevConsole/Resources/Images/DevConsole-Using_Template_1.png" />
3. 템플릿을 설명하는 대화 상자에서 **추가**를 클릭합니다.
