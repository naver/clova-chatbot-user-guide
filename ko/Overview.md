# Clova Chatbot 개요

Clova Chatbot은 <a href="https://developers.naver.com/docs/clova/guide/" target="_blank">Clova</a>를 통해 사용자의 간단한 대화 요청이나 문의에 답변하는 챗봇(chatbot) 서비스를 제공할 수 있는 [Clova Extension](/Terms.md#ClovaExtension)(이하 Extension)입니다.

## Clova Chatbot이란? {#WhatisChatBotExt}

Clova Chatbot은 Clova를 통해 사용자의 간단한 대화 요청이나 문의에 답변하는 Extension입니다.

Extension은 음악, 쇼핑, 금융 등과 같은 서드파티 서비스나 집안의 IoT 기기 제어 등 사용자가 Clova를 통해 다양한 경험을 제공받을 수 있도록 Clova에 확장된 기능을 제공하는 웹 애플리케이션입니다.

Clova Chatbot은 고객 센터로 자주 유입되는 고객 문의를 처리하거나 사용자와 간단히 대화하는 챗봇 서비스를 손쉽게 구현해 제공할 수 있게 하는 Extension입니다.

## Clova Chatbot의 특징 {#FeaturesOfChatBotExt}

Clova Chatbot의 특징은 다음과 같습니다.

* Clova Chatbot에서는 정해진 유형으로 대화가 수행되기 때문에 [Interaction 모델](/Terms.md#InteractionModel)이 비교적 간단합니다. Interaction 모델은 사용자의 음성에서 인식된 요청을 Extension이 Clova에 전달하기 위해 정형화된 형식(JSON)으로 변환하는 규칙의 명세입니다.
* Clova Chatbot의 소프트웨어 개발에 대한 부분은 Clova 플랫폼이 제공하기 때문에 별도의 <a href="https://developers.naver.com/docs/clova/guide/CEK/Guides/Build_Custom_Extension.md#Preparation " target="_blank">Extension 서버</a>를 구축하거나 소프트웨어를 개발하지 않아도 됩니다.
* 소프트웨어 개발자가 아니더라도 Interaction 모델을 만들어 Clova Chatbot을 제공할 수 있으며, 시간과 비용이 많이 들지 않습니다. Clova Chatbot에서 만드는 Interaction 모델은 '챗봇 대화'라고 표현합니다.

![](/Resources/Images/Clova_Chatbot_Extension_Concept_Diagram.png)

## 작동 구조 {#OperationStructure}

Clova는 클라이언트에서 입력된 사용자의 발화를 인식하고 사용자의 발화를 분석합니다. 분석된 발화가 Clova Chatbot이 처리할 내용이라면 Clova는 분석된 사용자의 발화 정보를 Clova Chatbot에 전달합니다. Clova Chatbot은 미리 등록된 Interaction 모델인 챗봇 대화를 참조해 사용자의 질문 유형을 확인하며, 해당 질문 유형에 작성해 놓은 답변을 Clova가 사용자에게 전달하도록 요청합니다.

![](/Resources/Images/Clova_Chatbot_Extension_Operation_Structure.png)
