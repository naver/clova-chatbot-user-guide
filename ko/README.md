# Chatbot 개요

Chatbot은 <a href="https://clova.ai/" target="_blank">Clova</a>를 통해 사용자의 간단한 대화 요청이나 문의에 답변하는 서비스를 제공하는 Extension입니다.

Extension은 음악, 쇼핑, 금융 등과 같은 서드파티 서비스나 집안의 IoT 기기 제어 등 사용자가 Clova를 통해 다양한 경험을 제공받을 수 있도록 Clova에 확장된 기능을 제공하는 웹 애플리케이션입니다. 주로 고객 센터로 자주 유입되는 고객 문의를 처리하거나 사용자와 간단히 대화하는 서비스를 chatbot으로 손쉽게 구현할 수 있습니다.

<a href="https://www.ncloud.com" target="_blank">NAVER CLOUD PLATFORM</a>을 통해 chatbot을 생성할 수 있으며, 생성한 chatbot을 Clova 플랫폼에 연결할 수 있습니다.

<div class="note">
  <p><strong>Note!</strong></p>
  <p>기존 Clova Chatbot의 운영은 다음과 같이 바뀝니다.</p>
  <ul>
    <li>Clova developer console을 통해 Clova chatbot을 <strong>신규 생성할 수 없습니다.</strong> Chatbot을 신규 생성하려면 <a href="https://www.ncloud.com" target="_blank">NAVER CLOUD PLATFORM</a>을 이용해야 합니다.</li>
    <li>이미 생성한 Clova chatbot이 있더라도 <strong>배포된 적이 없는 chatbot은 더 이상 심사나 배포를 신청할 수 없습니다.</strong></li>
    <li>배포된 적이 있는 Clova chatbot은 계속 사용할 수 있습니다. 다만, 서비스가 종료될 예정이기 때문에 <strong><a href="https://www.ncloud.com" target="_blank">NAVER CLOUD PLATFORM</a>의 chatbot으로 전환할 것을 권장</strong>합니다. 종료 일정은 추후 공지해드릴 예정입니다.</li>
    <li>기존 chatbot에 대한 가이드는 <a href="/Resources/PDF/Clova_Chatbot-User_Guide-ko.pdf">Clova_Chatbot-User_Guide-ko.pdf</a> 문서를 참고하시기 바랍니다.</li>
  </ul>
</div>

## Chatbot의 특징 {#FeaturesOfChatBotExt}

Chatbot의 특징은 다음과 같습니다.

* Chatbot에서는 정해진 유형으로 대화가 수행되기 때문에 대화 모델이 비교적 간단합니다. 대화 모델은 사용자의 음성에서 인식된 요청을 Extension이 Clova에 전달하기 위해 정형화된 형식(JSON)으로 변환하는 규칙의 명세입니다.
* Chatbot의 소프트웨어 개발에 대한 부분은 Clova 플랫폼이 제공하기 때문에 별도의 소프트웨어를 개발하지 않아도 됩니다.
* 소프트웨어 개발자가 아니더라도 대화 모델을 만들어 Chatbot을 제공할 수 있으며, 시간과 비용이 많이 들지 않습니다.

![](/Resources/Images/Clova_Chatbot_Extension_Concept_Diagram.png)

## 동작 구조 {#OperationStructure}

Clova는 클라이언트에서 입력된 사용자의 발화를 인식하고 사용자의 발화를 분석합니다. 분석된 발화가 chatbot이 처리할 내용이라면 Clova는 분석된 사용자의 질문 정보를 chatbot에 전달합니다. Chatbot은 미리 등록된 대화 모델을 참조해 어떤 대화인지 확인하며, 해당 대화에 작성해 놓은 답변을 Clova가 사용자에게 전달하도록 요청합니다.

![](/Resources/Images/Clova_Chatbot_Extension_Operation_Structure.png)
