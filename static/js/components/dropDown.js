/**
 *  renders the dropdown message and
 *  handles the user selection
 * @param {Array} drop_down_data json array
 */
function renderDropDwon(drop_down_data) {
    console.log(drop_down_data);
    let drop_down_options = "";
    for (let i = 0; i < drop_down_data.length; i += 1) {
        drop_down_options += `<option value="${drop_down_data[i].value}">${drop_down_data[i].label}</option>`;
        console.log(String(drop_down_data[i].value), drop_down_data[i].label )
    }
    const drop_down_select = `<div class="dropDownMsg"><select class="browser-default dropDownSelect"> <option value="" disabled selected>Choose your option</option>${drop_down_options}</select></div>`;
    $(".chats").append(drop_down_select);
    scrollToBottomOfResults();
    // add event handler if user selects a option.
    // eslint-disable-next-line func-names
    $("select").on("change", function () {
        let value = "";
        let label = "";
        $("select option:selected").each(() => {
            console.log(this);
            label += $(this).val() ;
            value += $(this).val();
            console.log(label, value);
        });

        
        var init = value.split(":");
        var left = init[0].split("{");
        var slot = left[1];
        var intent = left[0];
        var right = init[1].split("}");
        setUserResponse(right[0]);
        console.log
        send(`${intent}{"${slot.trim()}":"${right[0]}"}`)
        $(".dropDownMsg").remove();
    });
}

