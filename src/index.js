import * as DmnEditor from "./dmn.js";

const arr = ` <?xml version="1.0" encoding="UTF-8"?>
<dmn:definitions xmlns:dmn="http://www.omg.org/spec/DMN/20180521/MODEL/" xmlns="LOCAL" xmlns:feel="http://www.omg.org/spec/DMN/20180521/FEEL/" xmlns:kie="http://www.drools.org/kie/dmn/1.2" xmlns:dmndi="http://www.omg.org/spec/DMN/20180521/DMNDI/" xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" id="_FE71101A-2776-4E69-B0D1-1F4002B4704B" name="SMALL_TICKET_SIZE_PL_CHALLENGER" typeLanguage="http://www.omg.org/spec/DMN/20180521/FEEL/" namespace="LOCAL">
  <dmn:extensionElements/>
  <dmn:inputData id="_CDFF55BA-A991-409D-B1ED-010D5C3C4937" name="strategyInput">
    <dmn:extensionElements/>
    <dmn:variable id="_8F44EB5B-6C9D-40A1-A751-402D60D1B517" name="strategyInput"/>
  </dmn:inputData>
  <dmn:decision id="_8F947D70-F268-49C0-AEFB-D167F1C052D2" name="isInReviewOnValidatedIncome">
    <dmn:extensionElements/>
    <dmn:variable id="_B5F1D636-CDAB-4222-944D-8F601242A36F" name="isInReviewOnValidatedIncome" typeRef="boolean"/>
    <dmn:informationRequirement id="_718074DE-CEDA-46E5-BDCE-B2BCA96BDF46">
      <dmn:requiredInput href="#_CDFF55BA-A991-409D-B1ED-010D5C3C4937"/>
    </dmn:informationRequirement>
    <dmn:context id="_ACF2D2BE-9505-41DA-A4C4-3ED5BC9FC1C0">
      <dmn:contextEntry>
        <dmn:variable id="_ABE5A28B-831B-4F2B-A386-5C93104E80A4" name="isValidatedIncomeBelowThreshold" typeRef="boolean"/>
        <dmn:literalExpression id="_ABE5A28B-831B-4F2B-A386-5C93104E80A4">
          <dmn:text>if (strategyInput.validatedIncomeV2 != null and strategyInput.validatedIncomeV2 &lt; 10000) then true else false</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
      <dmn:contextEntry>
        <dmn:literalExpression id="_2D2B4B6F-5B60-4A7E-A29E-2FC30B54EFD9">
          <dmn:text>isValidatedIncomeBelowThreshold = true and strategyInput.applicationScoreCard.bankStatementPresent = false</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
    </dmn:context>
  </dmn:decision>
  <dmn:decision id="_48518263-D373-4BB6-A74D-3E089BACED1F" name="rejectionNegativeSignals">
    <dmn:extensionElements/>
    <dmn:variable id="_DC09D01C-7D85-41FA-8E77-EEEB60527D9B" name="rejectionNegativeSignals"/>
    <dmn:informationRequirement id="_FE168DA8-F165-4069-AA36-ACB6866BE12B">
      <dmn:requiredInput href="#_CDFF55BA-A991-409D-B1ED-010D5C3C4937"/>
    </dmn:informationRequirement>
    <dmn:context id="_380DAE18-84CC-47B5-BBA4-F9A722B0C5B8">
      <dmn:contextEntry>
        <dmn:variable id="_37CDE6F0-00EB-4FDC-8758-F9B6FDDBD978" name="rejectionSignals"/>
        <dmn:literalExpression id="_37CDE6F0-00EB-4FDC-8758-F9B6FDDBD978">
          <dmn:text>["BLACKLISTED_NUMBER", "BS_FRAUD_UPLOADED_STATEMENTS_HIGH_RISK_STATES_NTC", "BS_FRAUD_STATE_BANK_AVG_CLOSING_EOD_BALANCE_90_DAYS", "BS_FRAUD_STATE_BANK_AMT_TOTAL_CREDIT_DEBIT_CNT_TOTAL_CREDIT_DEBIT", "BS_FRAUD", "WRITTEN_OFF_ACCOUNT_ABOVE_THRESHOLD", "UNAPPROVED_ACCOUNTS", "DPD_ON_CURRENT_LOANS", "BS_CHECK_BOUNCE", "BS_NEGATIVE_AVG_DAILY_BALANCE", "BS_LOW_AVG_DAILY_BALANCE", "BS_LOW_CREDIT_TRANSACTIONS", "BS_LOW_AVERAGE_CREDIT_AMOUNT", "X60PLUS_DPD_IN_LAST_YEAR", "PAYMENT_MISS_IN_LAST_YEAR", "CV_MISSED_PAYMENT", "COVID_RESTRUCTURED_TRADELINE_PRESENT", "NON_ZERO_SETTLEMENT_AMOUNT", "REJECTED_EMPLOYMENT_CATEGORY", "BS_HIGH_LOAN_EMI_COUNT", "BS_LOW_TRANSACTION_CREDIT_AMOUNT", "MISSED_LOAN_PAYMENTS", "LOW_TS_SCORE", "HIGH_RISK_PINCODE_DPD_L12M", "NTC_NO_ENQUIRIES", "INTERNAL_LOAN_DPD", "BS_LOW_AVG_CLOSING_EOD_BALANCE_LAST_SIX_MONTHS", "BS_LOW_CREDIT_TRANSACTIONS_LAST_THREE_MONTHS", "BS_LOW_DEBIT_TRANSACTIONS_LAST_THREE_MONTHS", "BS_ALL_CREDIT_IN_LAST_ONE_MONTH", "INTERNAL_LOAN_BOUNCES", "PHONE_MISMATCH_WITH_CIBIL", "PHONE_MISMATCH_WITH_CIBIL_ENQUIRY", "DEVICE_HAS_BLACKLISTED_APP", "SMS_PLAGIARISM", "NTC_WITH_LOAN_ACCOUNTS_RULE", "THIN_CONTACT_BOOK", "PRISM_V4_MODEL_SCORE_ABOVE_CUTOFF","INTERNAL_30P_DPD","HIGH_RECENT_CL_ENQUIRIES_GE5", "NO_INTERNAL_ACTIVE_LOAN", "DPD_ON_UNPAID_EMI", "DPD_GREATER_THAN_ONE_IN_LAST_TWO_PAID_EMI", "NOT_ELIGIBLE_FOR_ON_DEMAND_TOP_UP", "INELIGIBLE_EMPLOYMENT_TYPE", "OUTSIDE_AGE_LIMIT_18_TO_65", "LOCATION_NOT_SERVICEABLE","ON_DEMAND_TOP_UP_REJECT","NO_PRODUCT_CODE_PL_0001","STPL_CHALLENGER_NOT_APPLICABLE","BUREAU_SCORE_LESS_THAN_700","HIGH_RISK_FRAUD_MODEL_SCORE","BLACKLIST_CONTACTS_GT_EQ_3","MODEL_V3_TIER_NOT_1_2_BLACKLIST_CONTACTS_GT_0","ML_SCORECARD_NEGATIVE_EVENTS_MODEL_V3","VALIDATED_INCOME_BELOW_10K","NO_RISK_SEGMENT","PAN_SERIES_RULE_M_Z","PAN_SERIES_RULE_F_Z_GT50","FOIR_GREATER_THAN_70PERC", "HIGH_RISK_MODEL_SCORE", "VI_LESS_THAN_15K","VERY_HIGH_STPL_CHL_TIER", "ON_DEMAND_TOP_UP_REQUEST", "ON_DEMAND_TOP_UP_BELOW_EMI_THRESHOLD","LOCATION_PERMISSION_DENIED"]</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
      <dmn:contextEntry>
        <dmn:literalExpression id="_EF91FAA2-04E0-404E-9EF5-EAA4C38EA365">
          <dmn:text>strategyInput.allNegativeSignals[list contains(rejectionSignals,item )]</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
    </dmn:context>
  </dmn:decision>
  <dmn:decision id="_EB11BFC0-76EE-4085-98A2-8528D313D04A" name="reviewNegativeSignals">
    <dmn:extensionElements/>
    <dmn:variable id="_E89B17D1-F93E-4497-881B-B4E256415270" name="reviewNegativeSignals" typeRef="Any"/>
    <dmn:informationRequirement id="_79FDA115-B268-496A-A6DD-62A3E38A43C9">
      <dmn:requiredInput href="#_CDFF55BA-A991-409D-B1ED-010D5C3C4937"/>
    </dmn:informationRequirement>
    <dmn:context id="_6B815B66-10D1-4888-87E2-BBA4EAF1128E">
      <dmn:contextEntry>
        <dmn:variable id="_55AE7BCF-C6AA-4E88-83D1-0769D5560839" name="reviewSignals"/>
        <dmn:literalExpression id="_55AE7BCF-C6AA-4E88-83D1-0769D5560839">
          <dmn:text>["SIGNAL_BASED_ON_ABB_SEGMENT_STATE", "COVID_RISK_STATE_NULL_DERIVED_INCOME", "COVID_RISK_STATE_DERIVED_INCOME_LESS_THAN_20K", "APPLICATION_IPV_NAME_MISMATCH", "NTC_WITH_LOAN_ACCOUNTS_RULE", "COVID_RISK_STATE_HIGH_DECLARED_TO_DERIVED_INCOME", "NO_OTHER_DERIVED_INCOME_EXCEPT_AUTO_LOAN", "AQ_LOAN_PURPOSE_DOUBT", "AQ_CUSTOMER_INDUSTRY_DOUBT", "SEGMENT_CHANGE_IN_REPEAT_LOAN", "SMS_PLAGIARISM", "NO_DERIVED_INCOME"]</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
      <dmn:contextEntry>
        <dmn:literalExpression id="_2E6B5843-09A3-4996-8B62-6F3E31F3F9F3">
          <dmn:text>strategyInput.allNegativeSignals[list contains(reviewSignals,item )]</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
    </dmn:context>
  </dmn:decision>
  <dmn:decision id="_0F8ED243-28C0-4673-A51A-2793F5D23934" name="isRejectedFromSTPL">
    <dmn:extensionElements/>
    <dmn:variable id="_DD810140-E504-40A7-AA15-D4499C9A3AE0" name="isRejectedFromSTPL" typeRef="boolean"/>
    <dmn:informationRequirement id="_AB6F426D-BB3B-41EB-9207-A8E6EA9477AC">
      <dmn:requiredDecision href="#_48518263-D373-4BB6-A74D-3E089BACED1F"/>
    </dmn:informationRequirement>
    <dmn:informationRequirement id="_2C9186FE-0DDA-4352-8A46-41966980BEB0">
      <dmn:requiredDecision href="#_805190DA-DB74-426A-B950-22233AABE782"/>
    </dmn:informationRequirement>
    <dmn:context id="_AA69900C-A305-4806-B588-C4F13A0D716D">
      <dmn:contextEntry>
        <dmn:variable id="_669EE5BE-FDAB-491E-A58F-A31B8ABCF824" name="rejectionSignalsNullCheck" typeRef="boolean"/>
        <dmn:literalExpression id="_4206315C-68AE-4AAF-A457-6D91E0CEEE05">
          <dmn:text>rejectionNegativeSignals = null</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
      <dmn:contextEntry>
        <dmn:variable id="_8DF9DD6C-7F82-4B52-A25D-10E2028D8301" name="rejectionSignalsCount"/>
        <dmn:literalExpression id="_5191DFF8-3683-46BE-AF8F-B9D414389D1D">
          <dmn:text>if rejectionSignalsNullCheck = false then count(rejectionNegativeSignals) else 0</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
      <dmn:contextEntry>
        <dmn:literalExpression id="_1D0E6581-63F8-473A-817A-D36866512145">
          <dmn:text>(InReviewSignalsCheck = false) or (rejectionSignalsCount &gt; 0)</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
    </dmn:context>
  </dmn:decision>
  <dmn:decision id="_514AE09D-5D38-4ED3-9282-20C0A245B11A" name="decision">
    <dmn:extensionElements/>
    <dmn:variable id="_20B83FD1-5C82-4B07-A2F8-373124C1A1BC" name="decision" typeRef="string"/>
    <dmn:informationRequirement id="_9B23B6E1-A5DA-44F3-95A2-B0CBAF3B2799">
      <dmn:requiredDecision href="#_0F8ED243-28C0-4673-A51A-2793F5D23934"/>
    </dmn:informationRequirement>
    <dmn:informationRequirement id="_DA9E369C-D450-4F42-9FD2-2750BE39CF76">
      <dmn:requiredDecision href="#_5C2F2B5A-2829-4EA6-921F-7F21786065A6"/>
    </dmn:informationRequirement>
    <dmn:informationRequirement id="_BC179AE6-0B76-4A13-A268-2891E965BC27">
      <dmn:requiredDecision href="#_DE921E75-DF22-4B24-909B-FF3C387A0CA7"/>
    </dmn:informationRequirement>
    <dmn:literalExpression id="_E3E4A457-6DEB-434E-B7FF-2C4D68B3B3B6">
      <dmn:text>if isStrategyApplicable = false then "INAPPLICABLE" else if isRejectedFromSTPL = true then "REJECTED" else if isInReviewFromSTPL = true then "IN_REVIEW" else "APPROVED"</dmn:text>
    </dmn:literalExpression>
  </dmn:decision>
  <dmn:decision id="_5C2F2B5A-2829-4EA6-921F-7F21786065A6" name="isInReviewFromSTPL">
    <dmn:extensionElements/>
    <dmn:variable id="_ADB08F46-A808-488E-8BDD-6DC84C213C97" name="isInReviewFromSTPL" typeRef="boolean"/>
    <dmn:informationRequirement id="_D9FBF088-FC52-45D2-974C-A75F91193ABF">
      <dmn:requiredDecision href="#_8F947D70-F268-49C0-AEFB-D167F1C052D2"/>
    </dmn:informationRequirement>
    <dmn:literalExpression id="_80E6373F-29BA-482E-89EA-E8853CBBFCD7">
      <dmn:text>isInReviewOnValidatedIncome</dmn:text>
    </dmn:literalExpression>
  </dmn:decision>
  <dmn:decision id="_8FDE2BC0-FB99-4BD9-8FAA-F82ABC660A29" name="amountStrategySource">
    <dmn:extensionElements/>
    <dmn:variable id="_096A268E-7E35-4C9F-96D4-1DBC6E2D6948" name="amountStrategySource"/>
    <dmn:literalExpression id="_4D9FE90D-3AD3-49BD-97BD-B504808ADB2D">
      <dmn:text>"AMOUNT_STPL_ETC_1"</dmn:text>
    </dmn:literalExpression>
  </dmn:decision>
  <dmn:decision id="_2E5DA882-BF69-4F8E-AC0D-B9CFBBCD0435" name="pricingStrategySource">
    <dmn:extensionElements/>
    <dmn:variable id="_1A284BB1-38D6-442D-8F97-9C76A59EC896" name="pricingStrategySource"/>
    <dmn:literalExpression id="_122195E7-CA38-4F15-AC14-E68664F5CCB2">
      <dmn:text>"PRICING_STPL_ETC_3"</dmn:text>
    </dmn:literalExpression>
  </dmn:decision>
  <dmn:decision id="_4C50D985-4232-459C-8119-C937F8B3D4A5" name="riskSegment">
    <dmn:extensionElements/>
    <dmn:variable id="_8A7A4FEB-B8B0-4550-A974-B3F133211C21" name="riskSegment"/>
    <dmn:informationRequirement id="_DEA8A9CD-0423-4012-8DB6-C864BE04FFD0">
      <dmn:requiredInput href="#_CDFF55BA-A991-409D-B1ED-010D5C3C4937"/>
    </dmn:informationRequirement>
    <dmn:literalExpression id="_BABE312D-94D0-4A94-A7F7-422A076797EE">
      <dmn:text>strategyInput.RiskSegmentStpl</dmn:text>
    </dmn:literalExpression>
  </dmn:decision>
  <dmn:decision id="_DE921E75-DF22-4B24-909B-FF3C387A0CA7" name="isStrategyApplicable">
    <dmn:extensionElements/>
    <dmn:variable id="_544BBE0C-9241-45D1-84CF-561A2D507668" name="isStrategyApplicable"/>
    <dmn:informationRequirement id="_ADD6698F-7BD5-4247-BD08-AAE34B61947E">
      <dmn:requiredInput href="#_CDFF55BA-A991-409D-B1ED-010D5C3C4937"/>
    </dmn:informationRequirement>
    <dmn:context id="_01E1AA43-D1AC-4D01-BA62-0F3A615FB0D8">
      <dmn:contextEntry>
        <dmn:variable id="_97917FAB-2F41-4CD8-B49C-03DF178D2B93" name="deviceOs" typeRef="string"/>
        <dmn:literalExpression id="_F89F7030-7C9E-421D-A413-FA6783D3921E">
          <dmn:text>if strategyInput.applicationScoreCard.deviceOS = null then "Android" else strategyInput.applicationScoreCard.deviceOS</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
      <dmn:contextEntry>
        <dmn:literalExpression id="_C01DA75E-A74C-473B-88CD-5D4E8F281F91">
          <dmn:text>lower case(deviceOs)  = "android"</dmn:text>
        </dmn:literalExpression>
      </dmn:contextEntry>
    </dmn:context>
  </dmn:decision>
  <dmn:decision id="_805190DA-DB74-426A-B950-22233AABE782" name="InReviewSignalsCheck">
    <dmn:extensionElements/>
    <dmn:variable id="_F7F24EFA-B3D4-4208-A261-5FF946E69694" name="InReviewSignalsCheck" typeRef="boolean"/>
    <dmn:informationRequirement id="_14ABBEAA-EBCA-4A22-8579-9762732DEFC6">
      <dmn:requiredDecision href="#_EB11BFC0-76EE-4085-98A2-8528D313D04A"/>
    </dmn:informationRequirement>
    <dmn:informationRequirement id="_FCC6C9DD-CAAA-4761-B01A-C61A7C0457A7">
      <dmn:requiredInput href="#_CDFF55BA-A991-409D-B1ED-010D5C3C4937"/>
    </dmn:informationRequirement>
    <dmn:literalExpression id="_0EECA2A4-338D-4184-AA77-1BE0F26ABDD0">
      <dmn:text>strategyInput.applicationScoreCard.applicableForRepeatLoanPolicy or (reviewNegativeSignals = null or count(reviewNegativeSignals) &lt; 1)</dmn:text>
    </dmn:literalExpression>
  </dmn:decision>
  <dmndi:DMNDI>
    <dmndi:DMNDiagram id="_856BA2C1-CDC6-4B32-A43E-192107A5214C" name="DRG">
      <di:extension>
        <kie:ComponentsWidthsExtension>
          <kie:ComponentWidths dmnElementRef="_ACF2D2BE-9505-41DA-A4C4-3ED5BC9FC1C0">
            <kie:width>50</kie:width>
            <kie:width>317</kie:width>
            <kie:width>1762</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_ABE5A28B-831B-4F2B-A386-5C93104E80A4">
            <kie:width>1762</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_2D2B4B6F-5B60-4A7E-A29E-2FC30B54EFD9">
            <kie:width>1762</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_380DAE18-84CC-47B5-BBA4-F9A722B0C5B8">
            <kie:width>50</kie:width>
            <kie:width>100</kie:width>
            <kie:width>761</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_37CDE6F0-00EB-4FDC-8758-F9B6FDDBD978">
            <kie:width>761</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_EF91FAA2-04E0-404E-9EF5-EAA4C38EA365">
            <kie:width>761</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_6B815B66-10D1-4888-87E2-BBA4EAF1128E">
            <kie:width>50</kie:width>
            <kie:width>100</kie:width>
            <kie:width>1343</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_55AE7BCF-C6AA-4E88-83D1-0769D5560839">
            <kie:width>1343</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_2E6B5843-09A3-4996-8B62-6F3E31F3F9F3">
            <kie:width>1343</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_AA69900C-A305-4806-B588-C4F13A0D716D">
            <kie:width>50</kie:width>
            <kie:width>334</kie:width>
            <kie:width>778</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_4206315C-68AE-4AAF-A457-6D91E0CEEE05">
            <kie:width>778</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_5191DFF8-3683-46BE-AF8F-B9D414389D1D">
            <kie:width>778</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_1D0E6581-63F8-473A-817A-D36866512145">
            <kie:width>778</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_E3E4A457-6DEB-434E-B7FF-2C4D68B3B3B6">
            <kie:width>1129</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_80E6373F-29BA-482E-89EA-E8853CBBFCD7">
            <kie:width>1204</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_4D9FE90D-3AD3-49BD-97BD-B504808ADB2D">
            <kie:width>300</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_122195E7-CA38-4F15-AC14-E68664F5CCB2">
            <kie:width>300</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_BABE312D-94D0-4A94-A7F7-422A076797EE">
            <kie:width>300</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_01E1AA43-D1AC-4D01-BA62-0F3A615FB0D8">
            <kie:width>50</kie:width>
            <kie:width>100</kie:width>
            <kie:width>968</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_F89F7030-7C9E-421D-A413-FA6783D3921E">
            <kie:width>968</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_C01DA75E-A74C-473B-88CD-5D4E8F281F91">
            <kie:width>968</kie:width>
          </kie:ComponentWidths>
          <kie:ComponentWidths dmnElementRef="_0EECA2A4-338D-4184-AA77-1BE0F26ABDD0">
            <kie:width>1347</kie:width>
          </kie:ComponentWidths>
        </kie:ComponentsWidthsExtension>
      </di:extension>
      <dmndi:DMNShape id="dmnshape-drg-_CDFF55BA-A991-409D-B1ED-010D5C3C4937" dmnElementRef="_CDFF55BA-A991-409D-B1ED-010D5C3C4937" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="471.5981308411215" y="595" width="100" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_8F947D70-F268-49C0-AEFB-D167F1C052D2" dmnElementRef="_8F947D70-F268-49C0-AEFB-D167F1C052D2" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="834.5" y="681" width="151" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_48518263-D373-4BB6-A74D-3E089BACED1F" dmnElementRef="_48518263-D373-4BB6-A74D-3E089BACED1F" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="835" y="497.5" width="151" height="51"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_EB11BFC0-76EE-4085-98A2-8528D313D04A" dmnElementRef="_EB11BFC0-76EE-4085-98A2-8528D313D04A" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="521" y="743" width="151" height="51"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_0F8ED243-28C0-4673-A51A-2793F5D23934" dmnElementRef="_0F8ED243-28C0-4673-A51A-2793F5D23934" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="1269" y="579" width="130" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_514AE09D-5D38-4ED3-9282-20C0A245B11A" dmnElementRef="_514AE09D-5D38-4ED3-9282-20C0A245B11A" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="1585" y="587" width="142" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_5C2F2B5A-2829-4EA6-921F-7F21786065A6" dmnElementRef="_5C2F2B5A-2829-4EA6-921F-7F21786065A6" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="1269" y="681" width="132" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_8FDE2BC0-FB99-4BD9-8FAA-F82ABC660A29" dmnElementRef="_8FDE2BC0-FB99-4BD9-8FAA-F82ABC660A29" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="1585" y="371" width="181" height="52"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_2E5DA882-BF69-4F8E-AC0D-B9CFBBCD0435" dmnElementRef="_2E5DA882-BF69-4F8E-AC0D-B9CFBBCD0435" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="1585" y="439" width="181" height="52"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_4C50D985-4232-459C-8119-C937F8B3D4A5" dmnElementRef="_4C50D985-4232-459C-8119-C937F8B3D4A5" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="473" y="300" width="100" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_DE921E75-DF22-4B24-909B-FF3C387A0CA7" dmnElementRef="_DE921E75-DF22-4B24-909B-FF3C387A0CA7" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="835" y="372" width="146" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNShape id="dmnshape-drg-_805190DA-DB74-426A-B950-22233AABE782" dmnElementRef="_805190DA-DB74-426A-B950-22233AABE782" isCollapsed="false">
        <dmndi:DMNStyle>
          <dmndi:FillColor red="255" green="255" blue="255"/>
          <dmndi:StrokeColor red="0" green="0" blue="0"/>
          <dmndi:FontColor red="0" green="0" blue="0"/>
        </dmndi:DMNStyle>
        <dc:Bounds x="835" y="579" width="158" height="50"/>
        <dmndi:DMNLabel/>
      </dmndi:DMNShape>
      <dmndi:DMNEdge id="dmnedge-drg-_718074DE-CEDA-46E5-BDCE-B2BCA96BDF46" dmnElementRef="_718074DE-CEDA-46E5-BDCE-B2BCA96BDF46">
        <di:waypoint x="521.5981308411215" y="620"/>
        <di:waypoint x="834.5" y="706"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_FE168DA8-F165-4069-AA36-ACB6866BE12B" dmnElementRef="_FE168DA8-F165-4069-AA36-ACB6866BE12B">
        <di:waypoint x="521.5981308411215" y="620"/>
        <di:waypoint x="835" y="523"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_79FDA115-B268-496A-A6DD-62A3E38A43C9" dmnElementRef="_79FDA115-B268-496A-A6DD-62A3E38A43C9">
        <di:waypoint x="521.5981308411215" y="620"/>
        <di:waypoint x="521" y="768.5"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_AB6F426D-BB3B-41EB-9207-A8E6EA9477AC" dmnElementRef="_AB6F426D-BB3B-41EB-9207-A8E6EA9477AC">
        <di:waypoint x="986" y="523"/>
        <di:waypoint x="1269" y="604"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_2C9186FE-0DDA-4352-8A46-41966980BEB0" dmnElementRef="_2C9186FE-0DDA-4352-8A46-41966980BEB0">
        <di:waypoint x="914" y="604"/>
        <di:waypoint x="1269" y="604"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_9B23B6E1-A5DA-44F3-95A2-B0CBAF3B2799" dmnElementRef="_9B23B6E1-A5DA-44F3-95A2-B0CBAF3B2799">
        <di:waypoint x="1334" y="604"/>
        <di:waypoint x="1585" y="612"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_DA9E369C-D450-4F42-9FD2-2750BE39CF76" dmnElementRef="_DA9E369C-D450-4F42-9FD2-2750BE39CF76">
        <di:waypoint x="1335" y="706"/>
        <di:waypoint x="1585" y="612"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_BC179AE6-0B76-4A13-A268-2891E965BC27" dmnElementRef="_BC179AE6-0B76-4A13-A268-2891E965BC27">
        <di:waypoint x="908" y="397"/>
        <di:waypoint x="1585" y="612"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_D9FBF088-FC52-45D2-974C-A75F91193ABF" dmnElementRef="_D9FBF088-FC52-45D2-974C-A75F91193ABF">
        <di:waypoint x="985.5" y="706"/>
        <di:waypoint x="1269" y="706"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_DEA8A9CD-0423-4012-8DB6-C864BE04FFD0" dmnElementRef="_DEA8A9CD-0423-4012-8DB6-C864BE04FFD0">
        <di:waypoint x="521.5981308411215" y="620"/>
        <di:waypoint x="523" y="350"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_ADD6698F-7BD5-4247-BD08-AAE34B61947E" dmnElementRef="_ADD6698F-7BD5-4247-BD08-AAE34B61947E">
        <di:waypoint x="521.5981308411215" y="620"/>
        <di:waypoint x="835" y="397"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_14ABBEAA-EBCA-4A22-8579-9762732DEFC6" dmnElementRef="_14ABBEAA-EBCA-4A22-8579-9762732DEFC6">
        <di:waypoint x="672" y="768.5"/>
        <di:waypoint x="835" y="604"/>
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="dmnedge-drg-_FCC6C9DD-CAAA-4761-B01A-C61A7C0457A7" dmnElementRef="_FCC6C9DD-CAAA-4761-B01A-C61A7C0457A7">
        <di:waypoint x="521.5981308411215" y="620"/>
        <di:waypoint x="835" y="604"/>
      </dmndi:DMNEdge>
    </dmndi:DMNDiagram>
  </dmndi:DMNDI>
</dmn:definitions>`;
const editor = DmnEditor.open({
  container: document.getElementById("dmn-editor-container"),
  initialContent: Promise.resolve(arr),
  readOnly: false,
  resources: new Map([
    [
      "MyIncludedModel.dmn",
      {
        contentType: "text",
        content: Promise.resolve("")
      }
    ]
  ])
});
