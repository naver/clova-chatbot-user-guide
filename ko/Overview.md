#  개요
이 문서는 Clova Chatbot extension(이하 Chatbot extension)에 대해 자세히 설명합니다. 이 문서를 통해 Chatbot extension이 무엇이고 어떻게 동작하는지 파악할 수 있으며, Chatbot extension과 관련된 가이드를 제공합니다.

## Chatbot extension이란? {#WhatisChatBotExt}
Chatbot extension은 [Clova](../guide)를 통해 사용자의 간단한 대화 요청이나 문의에 대해 답변하는 extension입니다. 주로, 사업이나 서비스의 고객 센터로 자주 유입되는 고객 문의를 처리하거나 소위 "심심이류"라고 하는 말벗 서비스와 같이 사용자와 간단히 대화하는 챗봇(Chatbot)서비스를 제공하는데 사용됩니다.

![](/Resources/Images/Clova_Chatbot_Extension_Concept_Diagram.png)

## 동작 구조 {#OperationStructure}

Clova는 클라이언트로부터 입력된 사용자의 발화를 인식하며, 사용자의 발화를 분석합니다. 분석된 발화가 Chatbot extension이 처리할 내용이라면 Clova는 분석된 사용자의 발화 정보를 Chatbot extension에게 전달합니다. Chatbot extension은 미리 [등록된 interaction 모델](/Design/Design_Guideline_For_Chatbot_Extension.md#DefineInteractionModel)을 참조하여 사용자의 발화 유형을 확인하며, 발화 유형마다 작성해 놓은 답변을 Clova가 사용자에게 전달하도록 요청합니다.

![](/Resources/Images/Clova_Chatbot_Extension_Operation_Structure.png)

## 특징 {#Features}

Chatbot extension은 다음과 같은 특징이 있습니다.

* 정해진 유형으로 대화를 하기 때문에 Interaction 모델이 비교적 간단합니다.
* 일반적인 Clova extension과 달리 별도의 extension 서버를 구축하거나 소프트웨어 개발을 하지 않아도 됩니다.
* 위 특징 때문에 소프트웨어 개발자가 아니더라도 extension을 만들 수 있으며, 시간과 비용이 많이 들지 않습니다.
