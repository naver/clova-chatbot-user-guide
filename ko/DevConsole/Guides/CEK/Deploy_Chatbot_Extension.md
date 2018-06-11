# Clova Chatbot 배포

Clova Chatbot 을 Clova 서비스에 배포할 수 있습니다. Clova Chatbot을 Clova 서비스에 배포하면 일반 사용자들이 Clova 앱의 **확장 서비스 관리** 메뉴에서 배포된 Clova Chatbot을 사용할 수 있게 됩니다.

Clova Chatbot을 배포할 때 일반적으로 다음 항목을 수행해야 합니다.

* [배포 정보 입력](#InputDeploymentInfo)
* [개인정보 및 규정 준수 정보 입력](#InputComplianceInfo)
* [심사 신청](#RequestExtensionSubmission)

## 배포 정보 입력 {#InputDeploymentInfo}

href="https://developers.naver.com/console/clova/" target="_blank">Clova Developers Console</a>에서 배포 정보를 입력할 수 있습니다.

Extension 등록 메뉴에서 **Extension 스토어 노출 정보**를 선택한 다음 배포 정보를 입력합니다.

![](/DevConsole/Resources/Images/DevConsole-Deployment_Info_Menu.png)

배포 정보는 Extension을 사용자에게 설명하기 위한 정보로서 Clova 앱의 **확장 서비스 관리** 메뉴에서 사용자에게 제공됩니다.

배포 정보는 다음과 같습니다.

* 분류: Clova Chatbot의 종류입니다. 사용자가 Extension 종류별로 목록을 확인하거나 검색할 때 이용됩니다.
* Extension 심사용 설명: [Extension 승인](#RequestExtensionSubmission) 프로세스에서 승인 담당자가 Extension을 검증하는 데 필요한 참고 정보입니다. 일반 사용자에게는 노출되지 않습니다. 안내 문구에 따라 작성합니다.
* 서비스 국가 및 지역: 현재는 한국에만 Extension을 배포할 수 있습니다.
* Extension 스토어용 설명: **확장 서비스 관리** 메뉴의 Extension 설명 화면에서 사용자에게 제공할 Clova Chatbot의 설명입니다. 안내 문구에 따라 작성합니다.
* Extension 요약 설명: **확장 서비스 관리** 화면에서 프로모션 등의 안내 문구를 표시할 때 사용될 수 있는 설명입니다.
* Extension 스토어용 발화 문장: 사용자가 Clova Chatbot을 어떻게 사용할 수 있는지 보여 주는 예시문입니다. **확장 서비스 관리** 메뉴의 Extension 설명 화면에 표시됩니다. 특히, 첫 번째 예시문은 **확장 서비스 관리** 화면에서 Extension 목록을 보여 줄 때 표시됩니다.
* 검색 키워드 (선택): 사용자가 특정 키워드로 Extension을 검색할 때 그 검색 결과에 Extension이 나타날 수 있게 합니다.
* 작은 아이콘: 작은 크기(108px x 108px)의 Extension 아이콘 파일입니다. **확장 서비스 관리** 화면이나 Extension 설명 화면에 표시됩니다.
* 큰 아이콘: 큰 크기(512px x 512px)의 Extension 아이콘 파일입니다.

이렇게 입력된 정보는 Clova 앱의 **확장 서비스 관리** 메뉴에서 다음과 같이 표시됩니다.

|확장 서비스 관리 화면|Extension 설명 화면|
|:-:|:-:|
|![Extension List](/DevConsole/Resources/Images/DevConsole-Store_UI_Example-Extension_Store_Home.png)|![Extension Details](/DevConsole/Resources/Images/DevConsole-Store_UI_Example-Extension_Page.png)|

<div class="note"><p><strong>Note!</strong></p>
<p>Extension 설명 화면에 표시되는 일부 정보는 Extension 기본 정보를 등록할 때 입력된 정보를 활용합니다.</p></div>

## 개인정보 보호 및 규정 준수 정보 입력 {#InputComplianceInfo}

Clova Chatbot 배포에 필요한 정보를 입력하는 마지막 단계로서 개인정보 관리 및 규정 준수에 관련된 내용을 입력해야 합니다. Extension 등록 메뉴에서 **개인 정보 보호 및 규정 준수**를 선택합니다.

![](/DevConsole/Resources/Images/DevConsole-Policy_Menu.png)

다음과 같이 정보를 입력합니다.

![](/DevConsole/Resources/Images/DevConsole-Input_Policy.png)

* 구매/지불 기능 존재 여부: Clova Chatbot을 사용할 때 사용자가 결제하거나 지불해야 하는 부분이 있을 경우 **네**를 선택합니다.
* 개인 정보 수집 여부: Clova Chatbot이 사용자의 개인정보를 수집할 경우 **네**를 선택합니다.
* 미성년자 사용 가능 여부: 미성년자가 Clova Chatbot을 사용해도 되면 **네**를 선택합니다.
* 개인 정보 정책 제공 URL (선택): Clova Chatbot이 개인정보를 수집하는 경우 이와 관련된 정책 정보 페이지를 입력합니다. 이는 Extension 설명 화면의 맨 아래에 표시됩니다.
* 면책 조항 제공 URL (선택): Extension과 관련한 면책 조항을 보여 주는 페이지를 입력합니다. 이는 개인정보 정책 URL과 같이 Extension 설명 페이지의 맨 아래에 표시됩니다.

**개인 정보 정책 제공 URL (선택)**<!-- -->과 **면책 조항 제공 URL (선택)**<!-- -->에 입력된 내용은 Extension 설명 화면에서 다음과 같이 표시됩니다.

![](/DevConsole/Resources/Images/DevConsole-Store_UI_Example-Extension_Policy.png)

## 심사 신청 {#RequestExtensionSubmission}

Clova Chatbot의 [배포 정보](#InputDeploymentInfo)와 [개인정보 보호 및 규정 준수 정보](#InputComplianceInfo)까지 입력이 완료되었다면 최종적으로 등록한 Extension 심사를 신청할 수 있습니다. Clova의 운영자는 등록한 Clova Chatbot의 정보와 실제 실행 여부 및 적합성 등을 심사하게 됩니다.

* Clova Chatbot이 정상으로 작동하고 검수 시 특별한 문제 사항이 없다면 Clova Chatbot은 심사를 통과하게 됩니다. 심사를 통과하면 즉시 혹은 원하는 시간에 Clova Chatbot을 배포할 수 있습니다.
* 만약 심사 과정에서 실행 오류가 있거나 사용자 시나리오에서 심각한 문제 발견되면 운영자에 의해 배포 요청이 거절되며 심사를 신청하기 전 단계로 돌아갑니다.

![](/DevConsole/Resources/Images/DevConsole-Extension_Submission_Process.png)

등록한 Extension 목록에서 **심사신청**을 클릭해 Clova Chatbot 심사를 신청할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Submit_Extension_1.png)

또는 [개인정보 보호 및 규정 준수 정보](#InputComplianceInfo)를 입력하는 화면 마지막에 있는 **심사 신청** 버튼을 클릭합니다.

![](/DevConsole/Resources/Images/DevConsole-Submit_Extension_2.png)

**심사 신청**을 클릭하면 다음과 같이 운영자에게 해당 심사 신청에 대한 정보를 남길 수 있습니다. Clova Chatbot의 첫 번째 심사 신청이라면 최초 심사 요청이라는 메시지와 어떤 Clova Chatbot인지 설명하는 메시지를 남기면 됩니다. Clova Chatbot의 기능이나 챗봇 대화를 업데이트했거나 반려된 Clova Chatbot을 수정해 재심사를 요청할 때는 개선된 사항이나 반려 의견 반영 여부를 입력하면 됩니다.

![](/DevConsole/Resources/Images/DevConsole-Submission_Request_Message.png)

<div class="note"><p><strong>Note!</strong></p>
<p>심사 중에는 Clova Chatbot의 정보와 챗봇 대화를 수정할 수 없습니다.</p></div>

심사는 개별 심사로 진행되며 심사를 위한 별도 환경에서 진행됩니다. 만약 [사용자 계정 연결](/CEK/Guides/Link_User_Account.md)이 필요한 서비스인 경우에는 [배포 정보를 입력](#InputDeploymentInfo)할 때 테스트를 위한 계정 정보를 **Extension 심사용 설명** 항목에 입력해야 합니다.

Clova Chatbot을 심사할 때 살펴보는 기본 평가 항목은 다음과 같습니다.

* Clova Chatbot 검증
  - Clova Chatbot서비스에 적합한 용어를 사용하고 있는지 확인합니다.
  - Clova Chatbot의 챗봇 대화를 검증합니다.
* 배포 정보 검증
  - Clova Chatbot의 설명, 카테고리, 검색 키워드와 같이 입력된 배포 정보가 Clova Chatbot에 맞게 입력되었는지 확인합니다.
  - Clova Chatbot이 개인정보 관리 규정 등 입력된 정책에 맞게 작동하는지 확인합니다.

심사 중에 **심사 취소** 메뉴를 클릭하면 언제든지 심사 신청을 취소할 수 있습니다. 심사 신청을 취소하면 이전 상태로 돌아갑니다.

![](/DevConsole/Resources/Images/DevConsole-Cancel_Submission.png)

심사에 통과하지 못하면 Extension의 **상태**가 **확인 요망**으로 변경됩니다. 이 상태는 **개발 중**인 상태와 같은 상태이며 다시 심사를 신청할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Extension_Submission_Rejected.png)

이때 **메시지**에서 **확인**을 클릭하면 심사에 대한 피드백을 확인할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Show_Submission_Feedback.png)


