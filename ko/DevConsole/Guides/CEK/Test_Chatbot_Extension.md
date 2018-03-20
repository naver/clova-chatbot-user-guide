# Chatbot extension 테스트하기
등록한 chatbot extension이나 interaction 모델을 배포하기 전에 테스트해볼 수 있습니다. 다음을 항목을 수행하여 chatbot extension과 interaction 모델을 테스트합니다.

* [Interaction 모델 빌드하기](#BuildInteractionModel)
* [Interaction 모델 테스트하기](#TestInteractionModel)
* [Clova 앱으로 chatbot extension 테스트하기](#TestOnClovaApp)

## Interaction 모델 빌드하기 {#BuildInteractionModel}

Chatbot extension을 배포하는 경우 [interaction 모델이 등록](/DevConsole/Guides/CEK/Register_Interaction_Model.md)되어 있어야 합니다. 정의된 interaction 모델은 빌드 과정을 거쳐야 새로 작성했거나 또는 업데이트한 내용을 [테스트](#TestInteractionModel)하거나 사용할 수 있습니다. 다음과 같이 정의된 interaction 모델을 빌드할 수 있습니다.

<ol>
  <li>등록한 extension 목록에서 interaction 모델을 빌드하려는 extension 항목의 <strong>{{ book.DevConsole.cek_edit }}</strong> 메뉴를 클릭합니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Interaction_Model_Menu.png" />
  <li>화면 왼쪽 상단에 있는 <strong>{{ book.DevConsole.BuildButton }}</strong> 버튼을 클릭하면 interaction 모델을 빌드합니다. 빌드 시간은 interaction 모델의 데이터 양에 따라 달라질 수 있습니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Build_Interaction_Model.png" />
</ol>

<div class="note">
  <p><strong>Note!</strong></p>
  <p>빌드 중에 <strong>{{ book.DevConsole.cek_interaction_model }}: {{ book.DevConsole.Dashboard }}</strong> 내에서 다른 메뉴로 이동하더라도 빌드가 취소되지 않습니다. 빌드를 시작한 이후에 얼마든지 메뉴 이동 및 내용 편집이 가능합니다.</p>
</div>

## Interaction 모델 테스트하기 {#TestInteractionModel}

[Interaction 모델 빌드](#BuildInteractionModel)가 완료되면, interaction 모델을 테스트할 수 있습니다. 다음과 같이 발화문을 테스트해볼 수 있습니다.

<ol>
  <li>왼쪽 사이드 메뉴바 아래 <strong>{{ book.DevConsole.cek_test }}</strong> 메뉴를 클릭합니다. 메뉴를 클릭하면 <strong>{{ book.DevConsole.cek_interaction_model }}: {{ book.DevConsole.cek_test }}</strong> 화면이 표시됩니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Test_Menu.png" />
  <li><strong>{{ book.DevConsole.cek_builder_test_expression_title }}</strong> 필드에 테스트할 발화문을 입력하고 <strong>{{ book.DevConsole.cek_builder_test_request_test }}</strong> 버튼이나 <strong>엔터</strong> 키를 누릅니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Test_Utterance_Example.png" />
</ol>

테스트를 완료하면 다음과 같은 결과를 확인할 수 있습니다. 다음과 같은 항목을 확인해야 합니다.

* **서비스 응답** 항목을 보고 [등록한 사전](/DevConsole/Guides/CEK/Register_Interaction_Model.md#AddDictionary)이 제대로 인식되는지 확인합니다.
* **시뮬레이션 결과** 항목을 보고 의도한 대로 답변이 제공되었는지 확인합니다.

![](/DevConsole/Resources/Images/DevConsole-Test_Result.png)

## Clova 앱으로 chatbot extension 테스트하기 {#TestOnClovaApp}

Chatbot extension을 실제 클라이언트인 Clova 앱에서 테스트해볼 수 있습니다. 이를 위해 extension 기본 정보를 등록하는 페이지의 **{{ book.DevConsole.cek_tester }}** 필드에 개발자 본인이나 extension을 테스트할 사람의 <strong>{{ book.OrientedService }} 계정</strong>을 입력해야 합니다. 계정을 추가한 후 **{{ book.DevConsole.cek_save }}** 버튼을 클릭하면 입력한 계정이 인증된 Clova 앱에서 개발 중인 extension을 테스트할 수 있습니다. Clova 앱에서 테스트를 중지하려면 입력한 계정 정보를 삭제하면 됩니다.

![](/DevConsole/Resources/Images/DevConsole-Add_Tester_ID.png)

<div class="note">
  <p><strong>Note!</strong></p>
  <p>테스터 ID를 등록한 후 조금 기다리면 chatbot extension을 테스트해 볼 수 있습니다. 만약, 1시간 정도가 지나도 chatbot extension을 테스트할 수 없을 경우 포럼이나 제휴 담당자를 통해 문의하시기 바랍니다.</p>
</div>
