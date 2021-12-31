$(function () {
  $.getJSON("./assets/json/main.json", function (data) {
    $.each(data, function (i, el) {
      let numder_pack = 0;
      numder_pack = i + 1;

      $(".packs").append(
        '<div class="pack shine-button" data-pack="' +
          numder_pack +
          '" >Пак №' +
          numder_pack +
          "</div>"
      );
      $(".packs").find(".pack").first().addClass("applied");
      $(".grid_group").first().addClass("applied");
      $(".grid_group_block").append(
        '<div class="grid_group pack_number' + numder_pack + '"></div>'
      );

      $.each(el, function (n, m) {
        let number_item = 0;
        number_item = n + 1;

        if (m.img) {
          $(".pack_number" + numder_pack + "").append(
            '<div class="item shine-button" data-fancybox href="#hidden"><span data-answer="' +
              m.img[1] +
              '" data-src="./assets/img/pack' +
              numder_pack +
              "/" +
              m.img[0] +
              '">' +
              number_item +
              "</span></div>"
          );
        } else if (m.question) {
          console.log("img");
          $(".pack_number" + numder_pack + "").append(
            '<div class="item shine-button" data-fancybox href="#hidden"><span data-answer="' +
              m.question[1] +
              '" data-q="' +
              m.question[0] +
              '">' +
              number_item +
              "</span></div>"
          );
        }
      });
    });
  });
});

$(document).on("click", ".pack", function () {
  $(".packs .pack").removeClass("applied");
  $(this).addClass("applied");
  let data_pack = $(this).attr("data-pack");
  $(".grid_group").removeClass("applied");
  $(".pack_number" + data_pack + "").addClass("applied");
});

$(document).on("click", ".item", function () {
  let item = $(this),
    text = $(".q_answer"),
    button = $(".b_answer"),
    q_src = $(this).find("span").attr("data-src"),
    q_question = $(this).find("span").attr("data-q"),
    q_answer = $(this).find("span").attr("data-answer");
  $(".item").removeClass("active");
  item.addClass("active");
  button.show();
  text.hide();

  if (q_question != undefined) {
    $(".text_question").text(q_question);
    $(".image_question").hide();
    $(".text_question").show();
  } else if (q_src != undefined) {
    $(".text_question").hide();
    $(".image_question").show();
    $(".image_question").attr("src", q_src);
  }

  text.text(q_answer);
  button.on("click", function () {
    text.show();
    button.hide();
    console.log(item.html());
    $(".item.active").addClass("applied");
  });
});
