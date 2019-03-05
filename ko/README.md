{% if output.name == "ebook" %}
# 문서 정보 {#DocOverview}

## 문서 개요 {#DocDesc}

이 글은 Clova가 제공하는 Clova Chatbot을 설명하고, Clova Chatbot을 사용해 간단한 대화나 문의 답변을 수행하는 서비스를 Clova로 제공하는 방법을 설명합니다.

## 독자 {#TargetReader}

이 글의 대상 독자는 Clova Chatbot을 사용해 사용자와 간단한 대화를 수행하는 서비스를 만들거나 고객 지원을 위해 문의에 대한 답변 서비스를 제공하려는 서비스 담당자입니다.

## 문의처 {#Contact}

이 문서의 내용에 오류가 있거나 내용과 관련한 의문 사항이 있으면 지정된 Clova 제휴 담당자에게 문의합니다.

{% else %}
# {{ config.title }}

Clova Chatbot은 <a href="https://clova.ai/" target="_blank">Clova</a>를 통해 사용자의 간단한 대화 요청이나 문의에 답변하는 [Clova Extension](/Terms.md#ClovaExtension)입니다. 고객 센터로 자주 유입되는 고객 문의를 처리하거나 "심심이"와 같은 말벗 서비스처럼 사용자와 간단히 대화하는 챗봇(chatbot) 서비스를 제공하는 데 주로 사용합니다.

## {{ config.title }} 개요 {#UserGuideOverview}

{{ config.title }}는 Clova가 제공하는 Clova Chatbot을 설명하고, Clova Chatbot을 사용해 간단한 대화나 문의 답변을 수행하는 서비스를 Clova로 제공하는 방법을 설명합니다. {{ config.title }}의 대상 독자는 Clova Chatbot을 사용해 사용자와 간단한 대화를 수행하는 서비스를 만들거나 고객 지원을 위해 문의에 대한 답변 서비스를 제공하려는 서비스 담당자입니다.

<div class="note"><p><strong>Note!</strong></p>
<p>Clova Chatbot은 개발이 계속 진행되고 있습니다. 따라서 이 글의 내용은 언제든지 변경될 수 있습니다.</p></div>

## {{ config.title }} 구성 {#Toc}

{{ config.title }}의 내용은 다음과 같습니다.

* [Clova Chatbot 개요](/Overview.md)
   * [Clova Chatbot이란?](/Overview.md#WhatisChatBotExt)
   * [Clova Chatbot의 특징](/Overview.md#FeaturesOfChatBotExt)
   * [작동 구조](/Overview.md#OperationStructure)
 * [Clova Chatbot 디자인 가이드라인](/Design/Design_Guideline_For_Chatbot_Extension.md)
   * [시작하기 전 고려사항](/Design/Design_Guideline_For_Chatbot_Extension.md#Considerations)
   * [챗봇 대화 모델 정의](/Design/Design_Guideline_For_Chatbot_Extension.md#DefineDialogueModel)
     * [대화 이름 정의](/Design/Design_Guideline_For_Chatbot_Extension.md#DefineDialogueName)
     * [대화 유형 정의](/Design/Design_Guideline_For_Chatbot_Extension.md#DefineDialogueType)
     * [질문 작성](/Design/Design_Guideline_For_Chatbot_Extension.md#MakeQueries)
     * [답변 작성](/Design/Design_Guideline_For_Chatbot_Extension.md#MakeResponsesForEachQuery)
     * [엔티티 정의](/Design/Design_Guideline_For_Chatbot_Extension.md#DefineEntity)
   * [유의 사항](/Design/Design_Guideline_For_Chatbot_Extension.md#Precautions)
   * [지속적인 업데이트](/Design/Design_Guideline_For_Chatbot_Extension.md#ContinuousUpdate)
* [Clova Developers Console과 Clova Extensions Kit 메뉴](/DevConsole/ClovaDevConsole_Overview.md)
   * [Clova Developers Console](/DevConsole/ClovaDevConsole_Overview.md#UsingClovaDevelopersConsole)
   * [Clova Extensions Kit 메뉴](/DevConsole/ClovaDevConsole_Overview.md#UsingCEKMenu)
* [Clova Chatbot 등록](/DevConsole/Guides/CEK/Register_Chatbot_Extension.md)
   * [이용 약관 및 개인정보 수집 동의](/DevConsole/Guides/CEK/Register_Chatbot_Extension.md#AgreeTermsOfUse)
   * [Clova Chatbot 기본 정보 입력](/DevConsole/Guides/CEK/Register_Chatbot_Extension.md#InputExtensionInfo)
* [챗봇 대화 만들기](/DevConsole/Guides/CEK/Register_Interaction_Model.md)
  * [공통 메시지 설정](/DevConsole/Guides/CEK/Register_Interaction_Model.md#SetCommonMessages)
* [Clova 앱으로 Clova Chatbot 테스트](/DevConsole/Guides/CEK/Test_Chatbot_Extension.md)
* [네이버톡톡과 LINE 연동](/DevConsole/Guides/CEK/Channel_Connection.md)
* [Clova Chatbot 배포](/DevConsole/Guides/CEK/Deploy_Chatbot_Extension.md)
   * [배포 정보 입력](/DevConsole/Guides/CEK/Deploy_Chatbot_Extension.md#InputDeploymentInfo)
   * [개인정보 보호 및 규정 준수 정보 입력](/DevConsole/Guides/CEK/Deploy_Chatbot_Extension.md#InputComplianceInfo)
   * [심사 신청](/DevConsole/Guides/CEK/Deploy_Chatbot_Extension.md#RequestExtensionSubmission)
* [Clova Chatbot 업데이트](/DevConsole/Guides/CEK/Update_Chatbot_Extension.md)
* [Clova Chatbot 중지 및 삭제](/DevConsole/Guides/CEK/Remove_Chatbot_Extension.md)

{% endif %}

{% if output.name == "ebook" %}
# 저작권 {#Copyright}

Copyright ⓒ {{book.ReleaseYear}}. {{ book.DocOwner }} Corp. All Rights Reserved.

이 문서는 {{ book.DocOwner }}㈜의 지적 자산이므로 {{ book.DocOwner }}㈜의 승인 없이 이 문서를 다른 용도로 임의 변경하여 사용할 수 없습니다.
이 문서는 정보제공의 목적으로만 제공됩니다. {{ book.DocOwner }}㈜는 이 문서에 수록된 정보의 완전성과 정확성을 검증하기 위해 노력하였으나, 발생할 수 있는 내용상의 오류나 누락에 대해서는 책임지지 않습니다. 따라서 이 문서의 사용이나 사용 결과에 따른 책임은 전적으로 사용자에게 있으며, {{ book.DocOwner }}㈜는 이에 대해 명시적 혹은 묵시적으로 어떠한 보증도 하지 않습니다. 관련 URL 정보를 포함하여 이 문서에서 언급한 특정 소프트웨어 상품이나 제품은 해당 소유자의 저작권법을 따르며, 해당 저작권법을 준수하는 것은 사용자의 책임입니다.

{{ book.DocOwner }}㈜는 이 문서의 내용을 예고 없이 변경할 수 있습니다.

{% endif %}
