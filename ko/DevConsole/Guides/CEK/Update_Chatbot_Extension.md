# Clova Chatbot 업데이트

Clova Chatbot을 개발할 때 입력한 질문 유형의 질문 예시에 맞게 사용자가 질문하지 않을 수 있습니다. 사용자가 실제 Clova를 사용하는 방식에 차이가 있을 수 있고, 입력한 질문 유형이 사용자의 모든 사용 패턴을 대변했다고 할 수 없습니다. Clova Chatbot을 배포한 이후에도 Clova Chatbot의 질문 유형이나 질문 예시를 지속적으로 개선하는 활동을 해야 사용자의 만족도를 향상시킬 수 있습니다.

Clova Chatbot을 등록한 후 대화 기록을 분석해 Clova Chatbot을 업데이트할 수 있습니다.

## 사용 버전과 테스트 버전 {#ExtenstionVersion}

Clova Chatbot이 심사를 통과해 Clova Chatbot 배포가 승인되면 Clova Chatbot은 **서비스 중** 상태가 됩니다. 이때 Clova Developers Console은 Clova Chatbot을 다음과 같이 두 가지 버전으로 만듭니다.

* 상용 버전: 현재 서비스 중 상태인 Clova Chatbot의 원본 정보를 가진 버전이며, Clova Chatbot에 대한 정보를 조회만 할 수 있습니다.
* 테스트 버전: 배포된 Clova Chatbot의 원본 정보를 복사해 만든 버전이며, Clova Chatbot을 업데이트할 때 사용합니다.

![](/DevConsole/Resources/Images/DevConsole-Extension_List_After_Submission.png)

상용 버전의 Clova Chatbot 정보는 현재 서비스 중인 내용을 반영하고 있으며 더 이상 수정할 수 없습니다. 따라서 복사된 테스트 버전을 이용해 Clova Chatbot을 업데이트해야 합니다. Clova Chatbot에 다음과 같은 업데이트 사항이 생기면 이를 테스트 버전 Clova Chatbot에 반영한 후 심사를 다시 신청합니다.

* [기본 정보](/DevConsole/Guides/CEK/Register_Chatbot_Extension.md#InputExtensionInfo)
* [챗봇 대화](/DevConsole/Guides/CEK/Register_Interaction_Model.md)
* [배포 정보](/DevConsole/Guides/CEK/Deploy_Chatbot_Extension.md)

심사를 통과하면 상용 버전이 업데이트 사항이 반영된 테스트 버전으로 교체됩니다. 그리고 다시 상용 버전의 Clova Chatbot 정보를 복사해 새로운 테스트 버전의 Clova Chatbot정보를 생성합니다.

다음 그림은 Clova Developers Console에서 Extension이 업데이트되는 구조를 보여 줍니다.

![](/DevConsole/Resources/Images/DevConsole-Branch_Chart_For_Extension_Update.png)

## 대화 기록을 사용한 챗봇 학습 {#UpdateUsingUtteranceHistory}

Clova Chatbot을 등록한 후 Clova 플랫폼이 제공하는 통계 데이터나 유입된 사용자 대화 기록을 분석해 Clova Chatbot을 업데이트할 수 있습니다.

대화 기록으로 Clova Chatbot을 업데이트하는 방법은 다음과 같습니다.

1. Clova Chatbot 창의 메뉴에서 **챗봇 학습하기 > 대화 기록**을 클릭합니다.
2. **마지막 챗봇 답변**에서 업데이트할 답변을 클릭하면 질문과 답변이 나타납니다.
3. 기록된 질문을 기존 대화 그룹에 추가하려면 질문을 클릭한 다음 질문을 추가할 질문 그룹의 이름을 선택합니다. **새로운 질문 그룹**을 클릭하면 선택할 질문으로 새로운 질문 그룹을 생성합니다.



