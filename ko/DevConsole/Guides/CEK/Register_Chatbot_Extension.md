# Chatbot extension 등록하기
[Chatbot extension의 설계](/Design/Design_Guideline_For_Chatbot_Extension.md)를 거의 완료했다면 chatbot extension을 Clova developer console에 등록해야 합니다. CEK 메뉴 페이지에서 페이지 하단에 있는 **새로운 extension 만들기** 버튼을 클릭하면 신규 chatbot extension을 등록할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-First_Look_of_Extension_List.png)

Chatbot extension을 등록할 때 일반적으로 다음 항목을 순차적으로 수행해야 합니다.

1. [이용 약관 및 개인 정보 수집 동의](#AgreeTermsOfUse)
2. [Extension 기본 정보 입력](#InputExtensionInfo)

## 이용 약관 및 개인 정보 수집 동의 {#AgreeTermsOfUse}

Chatbot extension을 등록하기 전에 우선 CEK API 서비스 이용 약관과 개인 정보 수집에 동의해야 합니다. 이용 약관 및 개인 정보 수집에 대한 내용 최초 한 번만 표시되며 동의한 이후에는 나타나지 않습니다.

![](/DevConsole/Resources/Images/DevConsole-Agree_Terms_of_Use_and_Collecting_Personal_Info.png)

## Chatbot extension 기본 정보 입력 {#InputExtensionInfo}

Chatbot extension을 등록하는 과정에서 가장 먼저 할 일은 등록할 extension의 기본 정보를 입력하는 것입니다. Extension의 기본 정보는 Clova developer console에 chatbot extension을 생성하기 위한 필수이자 최소 정보입니다. Extension의 기본 정보를 입력하고 나면 CEK 메뉴에서 생성한 chatbot extension을 언제든지 접근 또는 수정할 수 있게 됩니다.

다음 절차에 따라 chatbot extension을 등록합니다.

![](/DevConsole/Resources/Images/DevConsole-Create_New_Extension.png)

<ol>
  <li><strong>{{ book.DevConsole.cek_type }}</strong> 항목에서 등록할 extension의 타입을 <strong>Chatbot</strong>으로 선택합니다. Extension 타입을 선택하면 그에 해당하는 입력 필드가 추가로 나타납니다.</li>
  <li><strong>{{ book.DevConsole.cek_lang }}</strong> 항목에서 extension에서 사용할 언어를 선택합니다. 현재 <strong>{{ book.DevConsole.ko_KR }}</strong>만 지원하고 있습니다.</li>
  <li>Extension의 ID, 이름, 호출 이름에 해당하는 정보를 다음 항목에 입력합니다.
    <ol>
      <li><strong>{{ book.DevConsole.cek_id }}</strong>: Extension의 고유 ID입니다. Reverse domain name 표기 형식으로 입력합니다. (예: com.yourdomain.extension.pizzabot)</li>
      <li><strong>{{ book.DevConsole.cek_name }}</strong>: Extension의 이름입니다. 추후 Clova extension 스토어에 노출됩니다.</li>
      <li><strong>{{ book.DevConsole.cek_invocation_name }}</strong>: 사용자가 extension을 호출할 때 부르는 이름입니다. 일반적으로 보유하고 있는 서비스, 회사 또는 조직의 이름이 될 수 있으나 사용자의 편의 등을 위해 간결하고 특색있는 단어를 지정하는 것이 좋습니다. 범용적인 단어나 타사의 이름이나 서비스에 해당하는 용어는 사용할 수 없습니다. <strong>{{ book.DevConsole.cek_invocation_name }}</strong>은 extension 심사 시 검수받게 됩니다.</li>
      <li><strong>{{ book.DevConsole.cek_provider }}</strong>: Extension의 제작 주체(회사나 개인)의 이름 또는 별칭을 입력합니다. 추후 extension 스토어에 노출되며, extension 승인 과정에서 심사를 받게 됩니다.</li>
    </ol>
  </li>
  <li><strong>{{ book.DevConsole.cek_email }}</strong> 항목에 연락 가능한 이메일 주소를 입력합니다.</li>
  <li><strong>{{ book.DevConsole.cek_tester }}</strong> 항목에 개발 중인 extension을 테스트할 때 이용할 {{ book.OrientedService }} 계정을 입력하면 됩니다. 당장 입력하지 않아도 되며 추후 <a href="/DevConsole/Guides/CEK/Test_Chatbot_Extension.html">extension을 테스트</a>해야 할 때 이 필드에 값을 입력할 수 있습니다.</li>
  <li>Extension 기본 정보를 모두 입력한 후 <strong>{{ book.DevConsole.cek_create }}</strong> 버튼을 클릭합니다.</li>
</ol>

Extension 기본 정보 입력이 끝나면 생성된 extension의 정보를 수정하는 화면으로 전환됩니다. 이때부터 페이지 하단에 있는 **{{ book.DevConsole.cek_save }}** 버튼을 클릭하여 중간 내용을 언제든지 저장할 수 있으며, 다음과 같이 CEK 메뉴에서 등록된 Chatbot extension 목록을 확인할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Extension_List_after_Creation.png)
