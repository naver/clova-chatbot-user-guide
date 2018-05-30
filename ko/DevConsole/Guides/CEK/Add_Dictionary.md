# 사전 타입 추가

[사전 타입](/Design/Design_Guideline_For_Chatbot_Extension.md#VariableDictionary)은 비슷하거나 같은 의미를 나타내는 다양한 용어나 표현으로 인해 질문 예시가 중복 작성되지 않도록 정의해 둔 용어집이라고 생각하면 됩니다. 사전 타입을 미리 등록해 두면 다양한 사용자의 표현을 비교적 적은 예시로 인식해 낼 수 있습니다.

이전 발화 예시에서 사용되었던 "회원 가입", "계정 생성", "멤버 등록"을 같은 사전 타입에 추가하도록 하겠습니다.

## 메뉴에서 사전 타입 추가 {#DictionaryMenu}

Clova Chatbot의 메뉴에서 사전 타입을 추가하는 방법은 다음과 같습니다.

1. Clova Chatbot 창의 메뉴에서 **챗봇 만들기 > 사전 관리**를 클릭합니다.
2. **사전 관리** 화면에서 **사전 타입**의 입력란을 클릭합니다.
3. 대표어와 유의어를 입력하고 **Enter** 키를 누릅니다. 유의어는 쉼표(`,`)로 구분합니다.  
<img src="/DevConsole/Resources/Images/DevConsole-Add_Dictionary_1.png" />

## 사용자 질문 유형에서 추가 {#AddDictionaryFromInteractionModel}

사용자 질문 유형에서 사전 타입에 동의어를 추가할 수 있습니다.

1. Clova Chatbot 창의 메뉴에서 **챗봇 만들기 > 질문 및 답변**을 클릭합니다.
2. **질문 그룹 만들기** 화면의 질문 그룹 목록에서 사전 타입에 추가할 표현이 있는 사용자 질문 그룹을 선택합니다.
3. 사용자 질문 유형에서 사전 타입에 추가할 표현을 드래그해 선택합니다.
4. **등록된 Entity 선택하기** 대화 상자에서 선택한 표현을 추가할 대표어를 선택한 다음 **새로운 Task 만들기**를 클릭합니다.  
<img src="/DevConsole/Resources/Images/DevConsole-Add_Dictionary_2.png" />

사전 타입을 등록하고 나면 다음과 같이 같은 표현이나 패턴이 사용된 질문 예시를 대표어를 사용하는 질문 예시로 수정합니다.

![](/DevConsole/Resources/Images/DevConsole-Utterance_Example_After_Applying_Dictionary.png)


