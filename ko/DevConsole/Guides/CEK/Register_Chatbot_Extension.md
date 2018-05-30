# Clova Chatbot 등록

"[Clova Chatbot 디자인 가이드라인](/Design/Design_Guideline_For_Chatbot_Extension.md)"에 따라 Clova Chatbot의 설계를 완료했다면 Clova Chatbot을 <a href="https://developers.naver.com/console/clova/" target="_blank">Clova Developers Console</a>에 등록합니다.

<a href="https://developers.naver.com/console/clova/cek/#/list" target="_blank">CEK 메뉴 페이지</a>에서 **새로운 extension 만들기** 버튼을 클릭하면 새로운 Clova Chatbot을 등록할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-First_Look_of_Extension_List.png)

Clova Chatbot을 등록할 때 일반적으로 다음 항목을 순차적으로 수행해야 합니다.

1. [이용 약관 및 개인정보 수집 동의](#AgreeTermsOfUse)
2. [Extension 기본 정보 입력](#InputExtensionInfo)

## 이용 약관 및 개인정보 수집 동의 {#AgreeTermsOfUse}

Clova Chatbot을 등록하기 전에 우선 CEK API 서비스 이용 약관과 개인정보 수집에 동의해야 합니다. 이용 약관 및 개인정보 수집 동의는 Extension을 처음 등록할 때 한 번만 표시되며 동의한 이후에는 나타나지 않습니다.

![](/DevConsole/Resources/Images/DevConsole-Agree_Terms_of_Use_and_Collecting_Personal_Info.png)

## Clova Chatbot 기본 정보 입력 {#InputExtensionInfo}

Clova Chatbot을 등록하는 과정에서 가장 먼저 할 일은 등록할 Clova Chatbot의 기본 정보를 입력하는 것입니다. Clova Chatbot의 기본 정보는 Clova Developers Console에 Clova Chatbot을 생성하기 위한 필수이자 최소 정보입니다. Clova Chatbot의 기본 정보를 입력하고 나면 CEK 메뉴에서 생성한 Clova Chatbot에 언제든지 접근할 수 있고 Clova Chatbot을 수정할 수 있습니다.

Clova Chatbot을 등록하기 위해 입력해야 하는 기본 정보는 다음과 같습니다.

* 타입: 등록할 Extension의 종류입니다. Clova Chatbot을 등록할 때에는 **Chatbot**을 선택합니다. Extension 타입을 선택하면 그에 해당하는 입력 항목이 추가로 나타납니다.
* 사용 언어: Clova Chatbot에서 사용할 언어입니다. 현재 한국어만 지원하므로 **한국어**를 선택합니다
* 서비스 담당자 정보: Clova Chatbot 서비스 담당자의 메일 주소입니다. 담당자에게 연락 가능한 메일 주소를 입력합니다.
* 테스터 ID: 개발 중인 Clova Chatbot을 Clova 앱에서 테스트할 때 사용할 네이버 계정의 아이디입니다. 당장 입력하지 않아도 되며 추후 Clova Chatbot을 테스트해야 할 때 정보를 입력할 수 있습니다.

다음은 Clova Chatbot을 등록하기 위해 입력해야 하는 필수 정보입니다.

* Extension ID: Clova Chatbot의 고유 ID입니다. Reverse domain name 표기 형식으로 입력합니다(예: `com.yourdomain.extension.pizzabot`).
* Extension 이름: Clova Chatbot의 이름입니다. 이름은 Clova Extension 스토어에도 노출됩니다.
* 호출 이름: 사용자가 Clova Chatbot을 호출할 때 부르는 이름입니다(예: `피자봇 도우미`). 일반적으로 보유하고 있는 서비스, 회사 또는 조직의 이름을 입력할 수 있지만 사용자의 편의 등을 위해 간결하고 특색 있는 단어를 지정하는 것이 좋습니다. 범용적인 단어나 타사의 이름, 서비스에 해당하는 용어는 사용할 수 없습니다. **호출 이름**에 입력한 내용은 Extension 심사 시 검수 대상이 됩니다.
* 제작사: Clova Chatbot의 제작 주체입니다. 회사나 개인의 이름 또는 별칭을 입력합니다. 추후 Extension 스토어에 노출되며, Extension 심사 시 검수 대상이 됩니다.

Clova Chatbot기본 정보와 필수 정보를 모두 입력하고 **만들기** 버튼을 클릭하면 Clova Developers Console에 Clova Chatbot이 등록되고 Extension 목록이 나타납니다.

![](/DevConsole/Resources/Images/DevConsole-Extension_List_after_Creation.png)



