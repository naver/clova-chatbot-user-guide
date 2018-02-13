# Extension 배포하기
[Custom extension](/CEK/Guides/Build_Custom_Extension.md) 또는 Clova Home extension을 [Clova developer console에 등록](/DevConsole/Guides/CEK/Register_Extension.md)했다면 등록한 extension을 Clova 서비스에 배포할 수 있습니다. 배포하면 일반 사용자들이 **{{ book.DevConsole.ManageExtensions }}**라는 메뉴(Extension 스토어)에서 배포된 extension을 사용할 수 있게 됩니다.

Extension을 배포할 때 일반적으로 다음 항목을 수행해야 합니다.

* [배포 정보 입력](#InputDeploymentInfo)
* [개인 정보 및 규정 준수 정보 입력](#InputComplianceInfo)
* [심사 신청하기](#RequestExtensionSubmission)

## 배포 정보 입력 {#InputDeploymentInfo}

Clova developer console에서 [extension을 등록](/DevConsole/Guides/CEK/Register_Extension.md)과 [Interaction 모델을 등록](/DevConsole/Guides/CEK/Register_Interaction_Model.md)한 후 배포 정보를 입력할 수 있습니다. Extension 등록 메뉴에서 **{{ book.DevConsole.cek_publishing }}**를 선택합니다.

![](/DevConsole/Resources/Images/DevConsole-Deployment_Info_Menu.png)

다음와 같이 배포 정보를 입력합니다.

![](/DevConsole/Resources/Images/DevConsole-Input_Deployment_Info.png)

Extension을 사용자에게 설명하기 위한 정보로서 Clova 앱의 **{{ book.DevConsole.ManageExtensions }}** 메뉴(Extension 스토어)에서 사용자에게 제공됩니다. 다음과 같은 정보들이 입력됩니다.

* **{{ book.DevConsole.cek_category }}**: Extension의 종류로서 사용자가 extension 종류별로 목록을 확인하거나 검색할 때 이용됩니다.
* **{{ book.DevConsole.cek_test_instructions }}**: [Extension 승인](#RequestExtensionSubmission) 프로세스에서 승인 담당자가 extension을 검증하는데 필요한 참고 정보로서 일반 사용자에게는 노출되지 않습니다. 안내 문구에 따라 작성합니다.
* 서비스 국가 및 지역: 현재는 한국에만 extension을 배포할 수 있습니다.
* **{{ book.DevConsole.cek_full_skill_desc }}**: **{{ book.DevConsole.ExtensionPage }}**에서 사용자에게 제공할 extension의 설명입니다. 안내 문구에 따라 작성합니다.
* **{{ book.DevConsole.cek_short_skill_desc }}**: {{ book.DevConsole.StoreHome }}에서 프로모션 등의 안내 문구를 표시할 때 사용될 수 있는 설명입니다.
* **{{ book.DevConsole.cek_example_phrases }}**: 사용자가 extension을 어떻게 사용할 수 있는지 보여주는 예시문입니다. **{{ book.DevConsole.ExtensionPage }}**에 표시됩니다. 특히, 첫 번째 예시문은 {{ book.DevConsole.StoreHome }}에서 extension 목록을 보여줄 때 표시됩니다.
* **{{ book.DevConsole.cek_keywords }}**: 사용자가 특정 키워드로 extension을 검색할 때 그 검색 결과에 extension이 나타날 수 있도록 해줍니다.
* **{{ book.DevConsole.cek_small_icon }}**: 작은 크기(108px X 108px)의 extension 아이콘 파일입니다. **{{ book.DevConsole.ManageExtensions }}**이나 **{{ book.DevConsole.ExtensionPage }}**에 표시됩니다.
* **{{ book.DevConsole.cek_large_icon }}**: 큰 크기(512px X 512px)의 extension 아이콘 파일로서 추후 사용될 예정입니다.

이렇게 입력된 정보는 Clova 앱 **{{ book.DevConsole.ManageExtensions }}** 메뉴(Extension 스토어)에서 다음과 같이 표시됩니다.

| {{ book.DevConsole.StoreHome }} | {{ book.DevConsole.ExtensionPage }}   |
|-------------------|-------------------|
| ![Extension List](/DevConsole/Resources/Images/DevConsole-Store_UI_Example-Extension_Store_Home.png) | ![Extension Details](/DevConsole/Resources/Images/DevConsole-Store_UI_Example-Extension_Page.png) |

<div class="note">
  <p><strong>Note!</strong></p>
  <p><strong>{{ book.DevConsole.ExtensionPage }}</strong>에 표시되는 일부 정보는 <a href="/DevConsole/Guides/CEK/Register_Extension.html#InputExtensionInfo">Extension 기본 정보를 등록</a>할 때 입력된 정보를 활용합니다.</p>
</div>

## 개인 정보 보호 및 규정 준수 정보 입력 {#InputComplianceInfo}

Extension 배포에 필요한 정보를 입력하는 마지막 단계로서 개인 정보 관리 및 규정 준수에 관련된 내용을 입력해야 합니다. Extension 등록 메뉴에서 **{{ book.DevConsole.cek_privacy }}**를 선택합니다.

![](/DevConsole/Resources/Images/DevConsole-Policy_Menu.png)

다음과 같이 정보를 입력합니다.

![](/DevConsole/Resources/Images/DevConsole-Input_Policy.png)

* **{{ book.DevConsole.cek_allow_purchase }}**: Extension을 사용할 때 사용자가 결제하거나 지불해야 하는 부분이 있을 경우 **{{ book.DevConsole.cek_yes }}**를 선택합니다.
* **{{ book.DevConsole.cek_use_personal_info }}**: Extension이 사용자의 개인 정보를 수집할 경우 **{{ book.DevConsole.cek_yes }}**를 선택합니다.
* **{{ book.DevConsole.cek_child_directed }}**: 미성년자가 extension을 사용해도 되면 **{{ book.DevConsole.cek_yes }}**를 선택합니다.
* **{{ book.DevConsole.cek_privacy_policy_url }}**: Extension이 개인 정보를 수집하는 경우 이와 관련된 정책 정보 페이지를 입력합니다. 이는 extension 설명 페이지의 맨 아래에 표시됩니다.
* **{{ book.DevConsole.cek_terms_of_use }}**: Extension과 관련한 면책 조항을 보여주는 페이지를 입력합니다. 이는 개인 정보 정책 URL과 같이 extension 설명 페이지의 맨 아래에 표시됩니다.

**{{ book.DevConsole.cek_privacy_policy_url }}**과 **{{ book.DevConsole.cek_terms_of_use }}**에 입력된 내용은 **{{ book.DevConsole.ExtensionPage }}**에서 다음과 같이 표시됩니다.

![](/DevConsole/Resources/Images/DevConsole-Store_UI_Example-Extension_Policy.png)

## 심사 신청하기 {#RequestExtensionSubmission}

Extension의 [배포 정보](#InputDeploymentInfo)와 [개인 정보 보호 및 규정 준수 정보](#InputComplianceInfo)까지 입력이 완료되었다면 최종적으로 등록한 extension에 대해 extension 심사를 신청할 수 있습니다. Clova의 운영자는 등록한 extension의 정보와 실제 실행 여부 및 적합성 등을 심사하게 됩니다.

* Extension이 정상 동작하고 검수 시 특별한 문제 사항이 없다면 extension은 심사를 통과하게 될 것이며, 심사를 통과하면 즉시 혹은 원하는 시간에 extension을 배포할 수 있게 됩니다.
* 만약, 심사 과정에서 실행 오류가 있거나 사용자 시나리오 상의 심각한 문제 발견되면 운영자에 의해 배포 요청이 거절되며 신사 신청하기 전 단계로 돌아가게 됩니다.

![](/DevConsole/Resources/Images/DevConsole-Extension_Submission_Process.png)

등록한 extension 목록에서 **{{ book.DevConsole.cek_request_submit }}** 메뉴를 클릭하여 extension 심사를 신청할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Submit_Extension_1.png)

또는 [개인 정보 보호 및 규정 준수 정보](#InputComplianceInfo)를 입력하는 화면 마지막에 있는 **{{ book.DevConsole.cek_request_submit }}** 버튼을 클릭해도 됩니다.

![](/DevConsole/Resources/Images/DevConsole-Submit_Extension_2.png)

**{{ book.DevConsole.cek_request_submit }}**을 클릭하면 다음과 같이 운영자에게 해당 심사 신청에 대한 정보를 남길 수 있습니다. Extension의 첫 번째 심사 신청이라면 최초 심사 요청이라는 메시지와 어떤 extension인지 설명하는 메시지를 남기면 됩니다. Extension의 기능이나 interaction 모델을 업데이트했거나 반려된 extension을 수정하여 재심사를 요청할 때는 개선된 사항이나 반려 의견 반영 여부를 입력하면 됩니다.

![](/DevConsole/Resources/Images/DevConsole-Submission_Request_Message.png)

<div class="note">
  <p><strong>Note!</strong></p>
  <p>심사 중에는 extension의 정보와 interaction 모델을 수정할 수 없습니다.</p>
</div>

심사는 개별 심사로 진행되며 심사를 위한 별도 환경에서 진행됩니다. 만약, [사용자 계정 연결](/CEK/Guides/Link_User_Account.md)이 필요한 서비스인 경우에는 [배포 정보를 입력](#InputDeploymentInfo)할 때 테스트를 위한 계정 정보를 **{{ book.DevConsole.cek_test_instructions }}** 항목에 입력해야 합니다.

Extension을 심사할 때 살펴보는 기본 평가 항목은 다음과 같습니다.

* Extension 빌드 검증
  * Extension 서비스에 적합한 용어를 사용하고 있는지 확인합니다.
  * Intent, slot 등 interaction 모델을 검증합니다.
  * Extension [세부 목표](/Design/Design_Guideline_For_Extension.md#SettingGoal)에 부합되는 서비스를 제공하고 있는지 확인합니다.
* [사용 시나리오](/Design/Design_Guideline_For_Extension.md#MakeUseCaseScenarioScript) 검증
  * 대화 문맥 상 어색한 부분이 있는지 확인합니다.
  * 시나리오 상 사용되는 발화 데이터에 금칙어, 민감어 등이 있는지 확인합니다.
  * Extension이 [사용자 계정을 연결](/CEK/Guides/Link_User_Account.md)하는 경우 서비스에 특화된 부분을 더 검토할 수 있습니다.
* 배포 정보 검증
  * Extension의 설명, 카테고리, 검색 키워드와 같이 입력된 배포 정보가 extension에 맞게 입력되었는지 확인합니다.
  * Extension이 개인 정보 관리 규정 등 입력된 정책에 맞게 동작하는지 확인합니다.

심사 중에 **{{ book.DevConsole.cek_cancel_review }}** 메뉴를 클릭하면 언제든지 심사 신청을 취소할 수 있습니다. 심사 신청을 취소하면 이전 상태로 돌아갑니다.

![](/DevConsole/Resources/Images/DevConsole-Cancel_Submission.png)

심사에 통과하지 못하면 extension의 **{{ book.DevConsole.cek_status }}**가 **{{ book.DevConsole.cek_status_rejected }}**으로 변경됩니다. 이 상태는 **{{ book.DevConsole.cek_status_dev }}**인 상태와 같은 상태이며 다시 심사를 신청할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Extension_Submission_Rejected.png)

이때, **{{ book.DevConsole.cek_message }}**의 **{{ book.DevConsole.cek_view }}** 메뉴를 클릭하면 심사에 대한 피드백을 확인할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Show_Submission_Feedback.png)
