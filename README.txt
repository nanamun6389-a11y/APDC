APDC MINI PROGRAM — SOURCE-SYNC REBUILD

SOURCE OF TRUTH
- APDC_SEARCH_ASIA_PACIFIC_AMATEUR_LATIN_FIXED.zip
- players.json inside that ZIP

EXTRACTION RULE
- Exact competitor/team name match only for the 13 requested participant records.
- No event was manually added or inferred.
- entries.json contains the extracted rows.
- The source players.json does not contain a country field, so country is intentionally left blank rather than inferred.

HEAT / EVENT RULES
- EVENT remains independent for judging and results.
- HEAT may contain multiple EVENTs only when the event title has the same explicit dance code/composition.
- Events with unspecified dance composition are not combined by assumption.
- The same person is prevented from appearing twice inside one HEAT, including when the person appears once as Solo and once inside a Couple.

ADMIN PASSWORD
0070

PUBLIC
index.html = Entry Search only

ADMIN
admin.html -> Dashboard / Judge / MC / Live / Broadcast / Results

NAME CORRECTION
- Source label 'Heon KIM' was corrected to 'HyunGye KIM' per organizer confirmation (김현계).
- Event participation was not changed or inferred; only the participant name label was corrected.

LATEST UPDATE
- Judge list: Kim Tae Won (김태원) only.
- Combined HEAT notice added.
- Korean + easy English MC/LIVE/BROADCAST wording added:
  이번 HEAT에는 여러 EVENT가 함께 진행됩니다. 심사위원께서는 각 EVENT를 모두 개별 심사해 주세요.
  Multiple events are running in this heat. Please judge each event separately.

EVENT NUMBER UPDATE
- Mini-program EVENT numbers have been renumbered sequentially from 1 to 33.
- Original APDC SEARCH event numbers were used only to extract the correct source entries.
- All mini HEAT/EVENT references now use the new sequential mini EVENT numbers.
- event_number_mapping.json keeps the old-to-new number mapping for verification.

FINAL CLEANUP
- Public Entry Search now displays mini EVENT numbers 01–33.
- Judge: Kim Tae Won / 김태원 only.
- Removed duplicate Kim Tae Won wording from Admin.
- Removed Choi JiHye from Judge UI and judge configuration.
