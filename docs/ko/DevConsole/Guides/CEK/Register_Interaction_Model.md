# Interaction 모델 등록하기

CEK가 extension으로 사용자의 요청 정보를 보낼 때 사용자의 발화를 어떻게 분석하고 이를 어떤 형식으로 보낼지 [interaction 모델을 미리 정의](/Design/Design_Guideline_For_Extension.md#DefineInteractionModel)해야 합니다. Interaction 모델은 [custom extension](/CEK/Guides/Build_Custom_Extension.md)이 받게 될 요청을 정형화한 스키마입니다.

Clova developer console에서 [extension을 등록](/DevConsole/Guides/CEK/Register_Extension.md)한 후 Interaction 모델을 등록할 수 있습니다. 다음과 같이 CEK 메뉴에서 interaction 모델을 등록할 extension의 **{{ book.DevConsole.cek_edit }}** 버튼을 클릭합니다.

![](/DevConsole/Resources/Images/DevConsole-Interaction_Model_Menu.png)

다음과 같은 **{{ book.DevConsole.cek_interaction_model }}:{{ book.DevConsole.Dashboard }}** 화면이 표시됩니다.

![](/DevConsole/Resources/Images/DevConsole-Interaction_Model_Dashboard.png)

Extension을 설계하는 과정에서 [정의한 Interaction 모델](/Design/Design_Guideline_For_Extension.md#DefineInteractionModel)은 다음과 같은 순서로 등록하면 됩니다.

1. [Built-in slot 타입 추가하기](#AddBuiltinSlotType)
2. [Custom slot 타입 추가하기](#AddCustomSlotType)
3. [Built-in intent 추가하기](#AddBuiltinIntent)
4. [Custom intent 추가하기](#AddCustomIntent)

<div class="note">
  <p><strong>Note!</strong></p>
  <p>참고로 custom intent를 추가하고 필요한 slot 타입을 추가할 수도 있지만 Clova developer console이 제공하는 UI 특성상 slot 타입을 추가한 후 intent를 추가하는 순서로 진행하는 것이 좋습니다.</p>
</div>

## Built-in slot 타입 추가하기 {#AddBuiltinSlotType}

서비스를 제공할 extension이 어떤 [built-in slot 타입](/Design/Design_Guideline_For_Extension.md#Slot)을 사용할지 결정했다면 해당 extension의 interaction 모델에 built-in slot 타입을 추가해야 합니다. 예를 들어 피자 배달 extension을 만든다면, 피자 수량에 대한 정보 표현이 사용자 발화에 사용될 수 있습니다. 따라서 이와 관련된 built-in slot 타입을 extension에서 사용해야 한다면 다음과 같은 단계로 built-in slot 타입을 extension에 추가할 수 있습니다.

<ol>
  <li><strong>{{ book.DevConsole.cek_builder_list_title_slottype }}</strong> 패널의 우측 상단이나 왼쪽 사이드 메뉴바 아래 <strong>{{ book.DevConsole.cek_builder_list_title_slottype }}</strong> 메뉴 영역 우측 상단에 있는 <img class="inlineImage" src="/DevConsole/Resources/Images/DevConsole-Plus_Button.png" /> 버튼을 클릭합니다. 버튼을 클릭하면 <strong>{{ book.DevConsole.cek_interaction_model }}:{{ book.DevConsole.SlotType }}</strong> 화면이 표시됩니다.</li>
  <li><strong>{{ book.DevConsole.UseBuiltInSlotType }}</strong> 항목에서 필요한 built-in slot 타입의 체크 박스를 클릭합니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_Built-in_Slot_Type.png" />
  <li>필요한 built-in slot 타입을 선택한 후 우측 상단에 있는 <strong>{{ book.DevConsole.cek_save }}</strong> 버튼을 클릭합니다.</li>
</ol>

위 과정을 수행하고 나면 **{{ book.DevConsole.cek_interaction_model }}: {{ book.DevConsole.Dashboard }}** 화면의 **{{ book.DevConsole.cek_builder_list_title_slottype }}** 패널에 다음과 같이 built-in slot 타입이 추가된 것을 확인할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Added_Built-in_Slot_Type.png)

## Custom slot 타입 추가하기 {#AddCustomSlotType}

이제 extension에서 사용할 [custom slot 타입](/Design/Design_Guideline_For_Extension.md#Slot)을 정의해야 합니다. [Built-in slot 타입 추가하기](#AddBuiltinSlotType) 절에 이어 피자 배달 서비스 extension 계속 예로 들면, 사용자의 발화 중 피자 종류에 해당하는 부분을 custom slot 타입으로 정의해야 할 것 입니다. 다음과 같은 대표어와 동의어를 가지는 "PIZZA_TYPE"이라는 custom slot 타입을 추가한다고 가정하겠습니다.

| 대표어           | 동의어                                        |
|----------------|----------------------------------------------|
| 페퍼로니          | 페퍼로니 피자                                  |
| 바베큐           | 바베큐 피자, BBQ 피자                           |
| 치즈             | 치즈 피자                                     |
| 야채             | 야채 피자, 베지 피자, 베지테리언 피자               |
| 쉬림프 골드 크러스트 | 쉬림프 골드 크러스트 피자, 쉬림프 골크 피자, 쉬림프 골크 |

다음 절차에 따라 custom slot 타입을 추가합니다.

<ol>
  <li><strong>{{ book.DevConsole.cek_builder_list_title_slottype }}</strong> 패널의 우측 상단이나 왼쪽 사이드 메뉴바 아래 <strong>{{ book.DevConsole.cek_builder_list_title_slottype }}</strong> 메뉴 영역 우측 상단에 있는 <img class="inlineImage" src="/DevConsole/Resources/Images/DevConsole-Plus_Button.png" /> 버튼을 클릭합니다. 버튼을 클릭하면 <strong>{{ book.DevConsole.cek_interaction_model }}: {{ book.DevConsole.SlotType }}</strong> 화면이 표시됩니다.</li>
  <li><strong>{{ book.DevConsole.CreateSlotType }}</strong>의 입력 필드에 추가할 custom slot 타입의 이름을 입력하고 <strong>{{ book.DevConsole.cek_create }}</strong> 버튼을 클릭합니다. Custom slot 타입이 생성되면 해당 custom slot 타입에 대한 상세 정보를 볼 수 있는 화면이 나타납니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_Custom_Slot_Type_1.png" />
  <li><strong>{{ book.DevConsole.cek_builder_slottype_dictionary_title }}</strong>에 <img class="inlineImage" src="/DevConsole/Resources/Images/DevConsole-Plus_Button.png" /> 버튼을 클릭하여 대표어를 추가합니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_Custom_Slot_Type_2.png" />
  <li>추가한 대표어에 동의어나 유사 표현을 추가합니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_Custom_Slot_Type_3.png" />
  <li>마지막으로 우측 상단에 있는 <strong>{{ book.DevConsole.cek_save }}</strong> 버튼을 클릭합니다.</li>
</ol>

오른쪽의 <strong>대시 보드</strong> 메뉴를 통해 **{{ book.DevConsole.cek_interaction_model }}: {{ book.DevConsole.Dashboard }}**로 이동하면 custom slot 타입이 추가된 것을 확인할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Added_Custom_Slot_Type.png)

정의하려는 custom slot 타입에 대량의 정보를 입력해야 하는 경우 TSV(Tab-separated values, .tsv) 형식의 파일을 업로드할 수도 있습니다. TSV 파일의 각 행의 첫 번째 값은 대표어가 되며, 그 다음부터 탭 문자로 구분된 값은 대표어에 대한 동의어나 유사 표현이 됩니다. 다음은 "PIZZA_TYPE" custom slot 타입의 정의를 TSV 형식으로 표현한 예입니다.

```
페퍼로니    페퍼로니 피자
바베큐      바베큐 피자      BBQ 피자
치즈       치즈 피자
야채       야채 피자        베지 피자       베지테리언 피자
쉬림프 골드 크러스트         쉬림프 골드 크러스트 피자       쉬림프 골크 피자       쉬림프 골크
```

Clova developer console은 다음과 같이 **업로드** 버튼과 **다운로드** 버튼을 제공합니다. **업로드** 버튼을 클릭하면 미리 TSV 파일에 정의한 custom slot 타입을 업로드할 수 있고 **다운로드** 버튼을 클릭하면 현재 Clova developer console에 작성 중인 custom slot 타입을 TSV 파일로 다운로드 할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Custom_Slot_Upload_and_Download_Button.png)

## Built-in intent 추가하기 {#AddBuiltinIntent}

[Built-in intent](/Design/Design_Guideline_For_Extension.md#Intent)는 Clova 플랫폼이 일부 공통적인 사용자 요청 범주를 정하고 이를 공유하여 사용하기 위해 선언한 intent입니다. 예를 들면, 일반적으로 빈번히 발생할 수 있는 사용자의 긍정/부정 요청, 취소와 같은 요청을 intent로 미리 정의해 둔 것입니다. 현재 모든 extension은 Clova가 제공하는 built-in intent를 모두 처리할 수 있어야 하며, 다음과 같이 built-in intent가 기본 등록되어 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Built-in_Intent_List.png)

<div class="note">
  <p><strong>Note!</strong></p>
  <p> 추후 extension별로 필요한 built-in intent를 선택적으로 사용할 수 있게 변경할 예정입니다.</p>
</div>

## Custom intent 추가하기 {#AddCustomIntent}
Extension에서 사용할 [built-in slot 타입](#AddBuiltinSlotType)과 [custom slot 타입](#AddCustomSlotType)을 추가했다면 이제 custom intent를 추가하면 됩니다. 이전 설명에 이어서 피자를 주문하는 사용자의 요청을 가정하고 다음 절차에 따라 "OrderPizza"라는 이름의 intent를 추가합니다.

<ol>
  <li><strong>{{ book.DevConsole.cek_builder_list_title_intent }}</strong> 패널의 우측 상단이나 패널의 우측 상단이나 왼쪽 사이드 메뉴바 아래 <strong>{{ book.DevConsole.cek_builder_list_title_intent }}</strong> 영역 우측 상단에 있는 <img class="inlineImage" src="/DevConsole/Resources/Images/DevConsole-Plus_Button.png" /> 버튼을 클릭합니다. 버튼을 클릭하면 <strong>{{ book.DevConsole.cek_interaction_model }}: {{ book.DevConsole.NewIntent }}</strong> 화면이 표시됩니다.</li>
  <li><strong>{{ book.DevConsole.CreateCustomIntent }}</strong>의 입력 필드에 추가할 custom intent의 이름을 입력하고 <strong>{{ book.DevConsole.cek_create }}</strong> 버튼을 클릭합니다. Custom intent가 생성되면 해당 custom intent에 대한 상세 정보를 볼 수 있는 화면이 나타납니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_Custom_Intent_1.png" />
  <li><strong>{{ book.DevConsole.cek_builder_intent_slot_title }}</strong>의 입력 필드에 추가할 slot의 이름을 입력하고 오른쪽에 있는 <img class="inlineImage" src="/DevConsole/Resources/Images/DevConsole-Plus_Button.png" /> 버튼을 클릭하여 slot을 추가합니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_Custom_Intent_2.png" />
  <li>Slot을 추가한 후 해당 slot이 어떤 slot 타입인지 지정합니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_Custom_Intent_3.png" />
  <li>이제 <strong>{{ book.DevConsole.cek_builder_intent_expression_title }}</strong>에 사용자 발화 예시를 입력하고 오른쪽에 있는 <img class="inlineImage" src="/DevConsole/Resources/Images/DevConsole-Plus_Button.png" /> 버튼을 클릭하여 사용자 발화 예시를 추가합니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_Custom_Intent_4.png" />
  <li>추가한 발화 예시에서 slot으로 처리할 부분을 드래그하여 slot을 지정해줍니다.</li>
  <img src="/DevConsole/Resources/Images/DevConsole-Add_Custom_Intent_5.png" />
  <li>5번과 6번 단계를 반복하여 intent에 발화 예시를 필요한 만큼 추가합니다.</li>
  <li>마지막으로 우측 상단에 있는 <strong>{{ book.DevConsole.cek_save }}</strong> 버튼을 클릭합니다.</li>
</ol>

<div class="note">
  <p><strong>Note!</strong></p>
  <p>Slot 타입과 slot의 이름은 집합의 이름이거나 여러가지 값이 대입될 수 있는 추상적인 개념을 지닌 이름이어야 합니다.</p>
</div>

Custom slot 타입을 추가할 때와 마찬가지로 정의하려는 TSV(Tab-separated values, .tsv) 형식의 파일을 업로드할 수도 있습니다. TSV 파일은 두 부분으로 나뉘며 각각 intent의 slot을 정의하는 부분과 발화 예시를 나열하는 부분으로 나뉩니다. Intent의 slot을 정의하는 부분이 파일의 앞 부분에 오며 `[INTENT SLOT]`이 입력된 줄 바로 다음에 slot이 나열됩니다. 탭 문자로 구분된 첫 번째 열은 intent에서 사용되는 slot의 이름이며, 두 번째 열은 slot type입니다.

Intent의 발화 예시를 열거하는 내용은 파일의 뒷 부분에 오며 `[INTENT EXPRESSION]`이 입력된 줄 바로 다음에 발화 예시가 나열됩니다. 발화 예시에서 slot을 구분하기 위해 slot 이름으로 된 태그로 관련 표현을 감싸야 합니다. 다음은 intent를 정의한 TSV 파일 예입니다.

```
[INTENT SLOT]
pizzaType	PIZZA_TYPE
pizzaAmount	CLOVA.NUMBER

[INTENT EXPRESSION]
<pizzaType>페퍼로니</pizzaType> <pizzaAmount>2판</pizzaAmount> 주문해줘.
<pizzaType>BBQ 피자</pizzaType> <pizzaAmount>2판</pizzaAmount> 배달시켜줄래?
<pizzaType>콤비네이션 피자</pizzaType> <pizzaAmount>2개</pizzaAmount> 시켜줘.
<pizzaType>쉬림프 골크</pizzaType> <pizzaAmount>하나</pizzaAmount> 부탁해.
...
```

Clova developer console은 다음과 같이 **업로드** 버튼과 **다운로드** 버튼을 제공합니다. **업로드** 버튼을 클릭하면 미리 TSV 파일에 정의한 custom intent를 업로드할 수 있고 **다운로드** 버튼을 클릭하면 현재 Clova developer console에 작성 중인 custom intent를 TSV 파일로 다운로드 할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Utterance_Example_Upload_and_Download_Button.png)

<div class="danger">
  <p><strong>Caution!</strong></p>
  <p>같은 interaction 모델 내에서는 intent와 상관 없이 slot 타입에 같은 이름을 선언하여 사용할 것을 권고합니다. 예를 들면 "OrderPizza" intent에서 피자 종류("PIZZA_TYPE")에 관련된 slot 이름이 "pizzaType"이었다면 다른 intent에서도 같은 slot 타입을 선언해서 사용할 때 같은 이름인 "pizzaType"을 사용해야 합니다. 다만, "서울에서 부산 가는데 걸리는 시간 알려줘"와 같이 "서울"과 "부산"이 같은 slot 타입이라도 사용 목적이 구분되어야 하는 상황에서는 slot의 이름을 구분하여 작성합니다.</p>
</div>

여기까지 하나의 intent를 interaction 모델에 추가하는 방법을 설명했습니다. 앞에서 설명했던 방법을 반복하여 extension에 intent를 필요한 만큼 추가하면 다음과 같이 interaction 모델을 완성할 수 있습니다.

![](/DevConsole/Resources/Images/DevConsole-Added_Interaction_Model.png)
