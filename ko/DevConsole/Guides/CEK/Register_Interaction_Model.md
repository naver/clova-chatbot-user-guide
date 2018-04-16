# Interaction 모델 등록하기

Chatbot extension이 사용자의 발화를 어떤 유형으로 분석하고 이에 대해 어떻게 응답할지 [interaction 모델을 미리 정의](/Design/Design_Guideline_For_Chatbot_Extension.md#DefineInteractionModel)해야 합니다.

Clova developer console에서 [extension을 등록](/DevConsole/Guides/CEK/Register_Chatbot_Extension.md)한 후 Interaction 모델을 등록할 수 있습니다. 다음과 같이 CEK 메뉴에서 interaction 모델을 등록할 chatbot extension의 **{{ book.DevConsole.cek_edit }}** 버튼을 누릅니다.

![](/DevConsole/Resources/Images/DevConsole-Interaction_Model_Menu.png)

다음과 같은 **{{ book.DevConsole.cek_interaction_model }}:{{ book.DevConsole.cek_builder_header_title_dashboard }}** 화면이 표시됩니다.

![](/DevConsole/Resources/Images/DevConsole-Interaction_Model_Dashboard.png)

Extension을 설계하는 과정에서 [정의한 Interaction 모델](/Design/Design_Guideline_For_Chatbot_Extension.md#DefineInteractionModel)은 다음 항목을 수행하여 등록하면 됩니다.

* [사용자 발화 유형 추가하기](#AddUserRequestType)
* [답변 및 URL 정보 추가하기](#AddResponsesAndURLInfo)
* [변수 사전 추가하기](#AddDictionary)
* [응답 설정하기](#ConfigureResponseSettings)

## 사용자 발화 유형 추가하기 {#AddUserRequestType}

이 절에서는 사용자의 발화 유형을 추가하는 방법에 대해 설명합니다. 사용자의 발화 유형은 [Interaction 모델](/Design/Design_Guideline_For_Chatbot_Extension.md#DefineInteractionModel)에서 정의한 것으로 발화 예시와 그에 대한 응답으로 구성되어 있습니다. 여기서는 **가입 문의**에 대한 사용자 발화 유형을 추가하는 예를 보여줍니다.

<ol>
  <li>왼쪽 사이드 메뉴바의 <strong>사용자 발화 유형</strong> 메뉴를 누릅니다. 메뉴를 누르면 <strong>{{ book.DevConsole.cek_interaction_model }}:사용자 발화 유형</strong> 화면이 표시됩니다.</li>
  <li>아래와 같이 입력 필드에 추가할 사용자 발화 유형의 이름을 입력하고 <strong>엔터</strong> 키를 누릅니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_User_Request_Type_1.png" />
  <li>추가된 발화 유형의 필드를 누릅니다. 필드를 누르면 <strong>{{ book.DevConsole.cek_interaction_model }}:사용자 발화 유형 > 새로운 대화 Set 추가하기</strong> 화면으로 전환됩니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_User_Request_Type_2.png" />
  <li>미리 정의해 둔 발화 예시를 <strong>발화 예시 목록</strong> 필드에 추가합니다. 발화 예시문을 작성한 후 <strong>엔터</strong> 키를 누르면 추가됩니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_User_Request_Type_3.png" />
  <li><strong>챗봇 답변 목록</strong> 필드에 미리 정의해 둔 답변을 작성합니다. 답변을 작성한 후 <strong>엔터</strong> 키를 누르면 추가됩니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_User_Request_Type_4.png" />
</ol>

다음과 같이 **가입 문의**에 대해 답변을 제공하는 가장 기초적인 interaction 모델을 만들게 됩니다.

![](/DevConsole/Resources/Images/DevConsole-Added_User_Request.png)

이 상태에서 [답변 및 URL 정보를 추가](#AddResponsesAndURLInfo)하거나 [변수 사전을 추가](#AddDictionary)할 수 있습니다. 그리고 위와 같은 동작을 반복하여 사용자 발화 유형을 계속 추가할 수 있습니다.

## 답변 및 URL 정보 추가하기 {#AddResponsesAndURLInfo}

Chatbot extension은 특정 사용자 발화 유형에 대해 다음과 같이 답변을 제공할 수 있습니다.

* 등록된 단일의 답변을 제공
* 등록된 복수의 답변 중 하나를 제공
* 사용자의 요청마다 난수를 생성하여 등록된 복수의 답변 중 임의의 답변 하나를 제공

두 번째와 세 번째 방식은 답변을 제공하기 위해서 사용자 발화 유형에 답변을 추가해야 합니다. 다음을 수행하여 답변을 추가합니다.

<ol>
  <li>왼쪽 사이드 메뉴바의 <strong>사용자 발화 유형</strong> 메뉴를 누릅니다. 메뉴를 누르면 <strong>{{ book.DevConsole.cek_interaction_model }}:사용자 발화 유형</strong> 화면이 표시됩니다.</li>
  <li>답변을 추가할 사용자 발화 유형을 선택합니다. 필드를 누르면 <strong>{{ book.DevConsole.cek_interaction_model }}:사용자 발화 유형 > 새로운 대화 Set 추가하기</strong> 화면으로 전환됩니다.</li>
  <li><strong>챗봇 답변 목록</strong> 필드 아래 쪽의 <strong>+ 새로운 답변 추가</strong> 버튼을 누릅니다.</li>
  <li>추가로 생성된 입력 필드에 추가할 답변을 입력합니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_Response_1.png" />
  <li>답변 제공 방식을 선택합니다.
    <ul>
      <li><strong>(등록된 복수의 답변 중 하나를 제공하려면)</strong>, 제공할 답변의 <strong>서비스</strong> 토글 버튼을 누릅니다. 토글 버튼을 누르면 선택된 답변만 활성화됩니다.</li>
      <img src="/DevConsole/Resources/Images/DevConsole-Add_Response_2.png" />
      <li><strong>(난수를 발생시켜 임의의 답변을 제공하려면)</strong>, <strong>Random</strong> 체크 박스를 선택합니다. <strong>Random</strong> 체크 박스를 선택하면 모든 답변이 활성화됩니다</li>
      <img src="/DevConsole/Resources/Images/DevConsole-Add_Response_3.png" />
    </ul>
  </li>
</ol>

또한, 답변을 제공할 때 음성 정보로 전달될 텍스트 뿐만 아니라 답변과 관련된 URL 정보를 전달할 수 있습니다. URL 정보는 다음과 같이 **URL 주소**와 **노출 메시지**에 입력하면 됩니다. **URL 주소**는 이동하려는 URL이며 **노출 메시지**는 URL 대신 보여줄 텍스트를 의미합니다.

![](/DevConsole/Resources/Images/DevConsole-Add_URL_In_The_Response.png)

<div class="danger">
  <p><strong>Caution!</strong></p>
  <p>답변에 URL 정보를 추가로 제공하는 것은 현재 개발 중이며, 현재는 사용하실 수 없습니다.</p>
</div>

## 변수 사전 추가하기 {#AddDictionary}

[변수 사전](/Design/Design_Guideline_For_Chatbot_Extension.md#VariableDictionary)은 비슷하거나 같은 의미를 나타내는 다양한 용어나 표현으로 인해 발화 예시가 중복 작성되지 않도록 정의해둔 용어집이라고 생각하면 됩니다. 변수 사전을 미리 등록해두면 다양한 사용자의 표현을 비교적 적은 예시로 인식해낼 수 있습니다. Clova developer console에서는 같은 개념을 가지는 하나의 용어집을 Entity로 표현하고 있습니다.

이전 발화 예시에서 사용되었던 "회원 가입", "계정 생성", "멤버 등록"을 같은 entity에 추가하도록 하겠습니다. 다음을 수행하여 변수 사전을 추가합니다.

<ul>
  <li><strong>{{ book.DevConsole.cek_interaction_model }}:Entity</strong> 메뉴로 진입합니다. 다음과 같이 두 가지 방법이 있습니다.
    <ul>
      <li>왼쪽 사이드 메뉴바의 <strong>변수 사전</strong> 메뉴를 선택</li>
      <li>사용자 발화 유형에서 변수 사전을 적용할 표현을 드래그하여 entity를 추가</li>
      <img src="/DevConsole/Resources/Images/DevConsole-Add_Dictionary_1.png" />
    </ul>
  </li>
  <li>아래와 같이 입력 필드에 추가할 entity의 이름을 입력하고 <strong>엔터</strong> 키를 누릅니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_Dictionary_2.png" />
  <li>추가된 entity의 필드를 누릅니다. 필드를 누르면 <strong>{{ book.DevConsole.cek_interaction_model }}:사용자 발화 유형 > 새로운 Entity 추가하기</strong> 화면으로 전환됩니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_Dictionary_3.png" />
  <li>미리 정의해 둔 변수 사전 데이터를 필드에 추가합니다. 대표어와 동의어를 작성한 후 <strong>엔터</strong> 키를 누르면 추가됩니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_Dictionary_4.png" />
</ul>

위와 같이 변수 사전을 등록하고 나면 기존에 작성했던 발화 예시에 변수 사전을 적용할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Add_Dictionary_5.png)

변수 사전이 적용되면 다음과 같이 같은 표현이나 패턴이 사용된 발화 예시는 다른 표현으로 바꾸는 것이 좋습니다.

![](/DevConsole/Resources/Images/DevConsole-Utterance_Example_After_Applying_Dictionary.png)

## 응답 설정하기 {#ConfigureResponseSettings}

Interaction 모델에는 사용자 발화 유형과 그에 대한 답변 그리고 변수 사전을 등록할 수 있을 뿐만 아니라 응답에 대해 다음과 같은 것들을 설정할 수 있습니다.

* 첫 인사 메시지
* 사용자 발화 인식을 확신하는 정도에 따른 답변 구간
* 시스템 또는 서비스 장애에 따른 오류 메시지

왼쪽 사이드 메뉴바의 <strong>설정</strong> 메뉴를 누르면 <strong>{{ book.DevConsole.cek_interaction_model }}:설정</strong> 화면이 표시됩니다.

![](/DevConsole/Resources/Images/DevConsole-Response_Settings.png)

**첫인사 메시지**는 사용자가 chatbot extension 사용을 시작했을 때 전달할 간단한 인사나 사용법에 대한 안내 문구입니다. 다음과 같이 적당한 인사 메시지를 입력합니다.

![](/DevConsole/Resources/Images/DevConsole-Add_Greeting_Message.png)

**답변값 설정** 필드는 사용자의 발화 인식을 확신하는 정도에 따라 답변 구간을 나누고 그에 따른 답변 메시지를 설정하는 영역입니다. 답변 구간은 다음과 같이 구분됩니다.

* 정상 답변 구간(<span style="color:#ffffff; font-size:150%; vertical-align:middle;">&#9724;</span>): 사용자 발화가 미리 정의해 둔 사용자 발화 유형 중 하나로 식별되어 정상 답변이 가능하다고 판단한 구간
* 재질문 구간(<span style="color:#f1b5b5; font-size:150%; vertical-align:middle;">&#9724;</span>): 사용자 발화가 정상 답변 구간에 속하는지 미제공 질문 구간에 속하는지 판단하기 어려운 구간
* 미제공 질문 구간(<span style="color:#cee097; font-size:150%; vertical-align:middle;">&#9724;</span>): 사용자가 발화가 미리 정의해 둔 사용자 발화 유형 중 어느 것으로도 식별될 수 없어 답변이 불가능하다고 판단한 구간

사용자는 다양한 표현으로 이야기할 수 있기 때문에 Clova는 사용자의 발화 인식을 확률적으로 판단하여 전달합니다. 사용자 발화의 인식이 재질문 구간이나 미제공 질문 구간에 속하는 것으로 판단된다면 상황에 맞는 메시지를 전달할 수 있습니다. 다음은 각 구간에 대한 범위를 설정하고 재질문 구간과 미제공 질문 구간에 대해 응답 메시지를 작성한 예입니다.

![](/DevConsole/Resources/Images/DevConsole-Configure_Response_Brackets.png)

**에러 메시지** 필드는 시스템 또는 서비스 장애 시 제공할 오류 메시지를 입력하는 필드입니다.

![](/DevConsole/Resources/Images/DevConsole-Add_Error_Message.png)

마지막으로 설정 내용을 적용하려면 **저장** 버튼을 눌러야 합니다.
