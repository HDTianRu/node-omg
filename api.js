let api = {};

api.send_wo_cmd = function(cmd) {
  return {
    type: 'action',
    action: 'send_wo_cmd',
    param: cmd,
  }
}
api.send_ws_cmd = function(cmd, get_result = true, time = 1) {
  return {
    type: 'action',
    action: 'send_ws_cmd',
    param: {
      cmd,
      get_result,
      time
    }
  }
}
api.send_player_cmd = function(cmd, get_result = true, time = 1) {
  return {
    type: 'action',
    action: 'send_player_cmd',
    param: {
      cmd,
      get_result,
      time
    }
  }
}
api.send_ai_cmd = function(cmd, get_result = true, time = 1) {
  return {
    type: 'action',
    action: 'send_ai_cmd',
    param: {
      cmd,
      get_result,
      time
    }
  }
}





api.get_player = function(name) {
  return {
    type: 'action',
    action: 'get_player',
    param: name
  }
}
api.get_player_by_name = function(name) {
  return {
    type: 'action',
    action: 'get_player_by_name',
    param: name
  }
}
api.get_player_by_uuid_string = function(uuid) {
  return {
    type: 'action',
    action: 'get_player_by_uuid_string',
    param: uuid
  }
}

api.say = function(name, say) {
  return {
    type: 'action',
    action: 'say',
    param: {
      name,
      say
    }
  }
}
api.raw_say = function(name, raw) {
  return {
    type: 'action',
    action: 'raw_say',
    param: {
      name,
      raw
    }
  }
}
api.ask = function(name, hint, time) {
  return {
    type: 'action',
    action: 'ask',
    param: {
      name,
      hint,
      time
    },
  }
}
api.title = function(name, title, subtitle) {
  return {
    type: 'action',
    action: 'title',
    param: {
      name,
      title,
      subtitle
    }
  }
}
api.subtitle = function(name, subtitle, title) {
  return {
    type: 'action',
    action: 'title',
    param: {
      name,
      title,
      subtitle
    }
  }
}
api.action_bar = function(name, msg) {
  return {
    type: 'action',
    action: 'action_bar',
    param: {
      name,
      msg
    }
  }
}

api.get_all_online_players = function() {
  return {
    type: 'action',
    action: 'get_all_online_players'
  }
}

api.set_build_ability = function(name) {
  return {
    type: 'action',
    action: 'set_build_ability',
    param: name,
  }
}

api.when_chat_msg = function(callback) {
  return {
    type: 'event',
    event: 'when_chat_msg',
    callback
  }
}
api.when_receive_msg_from_command_block_named = function(callback) {
  return {
    type: 'event',
    event: 'when_receive_msg_from_command_block_named',
    callback
  }
}
api.when_receive_msg_from_sender_named = function(callback) {
  return {
    type: 'event',
    event: 'when_receive_msg_from_sender_named',
    callback
  }
}
api.when_player_change = function(callback) {
  return {
    type: 'event',
    event: 'when_player_change',
    callback
  }
}

api.bot = function() {
  return {
    type: 'action',
    action: 'bot'
  }
}



api.drop_item = function(num) {
  return {
    type: 'action',
    action: 'drop_item',
    param: num
  }
}
api.make_item = function(item_info, slot_id, anvil_pos, container_pos) {
  return {
    type: 'action',
    action: 'make_item',
    param: {
      item_info,
      slot_id,
      anvil_pos,
      container_pos
    }
  }
}
api.move_item = function(source_slot, target_slot, count) {
  return {
    type: 'action',
    action: 'move_item',
    param: {
      source_slot,
      target_slot,
      count
    }
  }
}
api.move_item_to_container = function(container_pos, move_operations) {
  return {
    type: 'action',
    action: 'move_item_to_container',
    param: {
      container_pos,
      move_operations
    }
  }
}

api.rename_item = function(anvil_pos, slot, new_name, auto_gen_anvil) {
  return {
    type: 'action',
    action: 'rename_item',
    param: {
      anvil_pos,
      slot,
      new_name,
      auto_gen_anvil
    }
  }
}

api.enchant_item = function(slot, enchants) {
  return {
    type: 'action',
    action: 'enchant_item',
    param: {
      slot,
      enchants
    }
  }
}
api.use_item = function(slot) {
  return {
    type: 'action',
    action: 'use_item',
    param: slot
  }
}

api.use_item_on_block = function(block_pos, face, slot) {
  return {
    type: 'action',
    action: 'use_item_on_block',
    param: {
      block_pos,
      face,
      slot
    }
  }
}
api.use_item_on_block_with_bot_offset = function(block_pos, bot_offset, face, slot) {
  return {
    type: 'action',
    action: 'use_item_on_block_with_bot_offset',
    param: {
      block_pos,
      bot_offset,
      face,
      slot
    }
  }
}

api.pick_block = function(block_pos, target_hotbar, retry_times) {
  return {
    type: 'action',
    action: 'pick_block',
    param: {
      block_pos,
      target_hotbar,
      retry_times
    }
  }
}

api.select_hotbar = function(slot) {
  return {
    type: 'action',
    action: 'select_hotbar',
    param: slot
  }
}

api.break_and_pick_block = function(block_pos, slot, recover_block, retry_times) {
  return {
    type: 'action',
    action: 'break_and_pick_block',
    param: {
      block_pos,
      slot,
      recover_block,
      retry_times
    }
  }
}

api.get_inventory_content = function(slot, windows = 0) {
  return {
    type: 'action',
    action: 'get_inventory_content',
    param: {
      slot,
      windows
    }
  }
}
api.set_structure_block_data = function(block_pos, settings) {
  return {
    type: 'action',
    action: 'set_structure_block_data',
    param: {
      block_pos,
      settings
    }
  }
}

api.set_container_content = function(container_pos, container_data_json) {
  return {
    type: 'action',
    action: 'set_container_content',
    param: {
      container_pos,
      container_data_json
    }
  }
}

api.write_book = function(slotID, pages, title, author) {
  return {
    type: 'action',
    action: 'write_book',
    param: {
      slotID,
      pages,
      title,
      author
    }
  }
}
api.place_item_frame_item = function(item_frame_position, slot_id, rotation) {
  return {
    type: 'action',
    action: 'place_item_frame_item',
    param: {
      item_frame_position,
      slot_id,
      rotation
    }
  }
}

api.gen_container = function(pos, container_data_json, container_block) {
  return {
    type: 'action',
    action: 'gen_container',
    param: {
      pos,
      container_data_json,
      container_block
    }
  }
}

api.legacy_block_to_rtid = function(block_name, block_data) {
  return {
    type: 'action',
    action: 'legacy_block_to_rtid',
    param: {
      block_name,
      block_data
    }
  }
}
api.rtid_to_legacy_block = function(rtid) {
  return {
    type: 'action',
    action: 'rtid_to_legacy_block',
    param: rtid
  }
}

api.rtid_to_block_name_and_state = function(rtid) {
  return {
    type: 'action',
    action: 'rtid_to_block_name_and_state',
    param: rtid
  }
}

api.block_name_and_state_to_rtid = function(block_name, block_data) {
  return {
    type: 'action',
    action: 'block_name_and_state_to_rtid',
    param: {
      block_name,
      block_data
    }
  }
}

api.rtid_to_java_str = function(rtid) {
  return {
    type: 'action',
    action: 'rtid_to_java_str',
    param: rtid
  }
}
api.place_block = function(pos, block_name, block_data) {
  return {
    type: 'action',
    action: 'place_block',
    param: {
      pos,
      block_name,
      block_data
    }
  }
}

api.place_command_block = function(pos, block_name, block_data, option) {
  return {
    type: 'action',
    action: 'place_command_block',
    param: {
      pos,
      block_name,
      block_data,
      option
    }
  }
}

api.place_sign = function(pos, block_name, text, lighting) {
  return {
    type: 'action',
    action: 'place_sign',
    param: {
      pos,
      block_name,
      text,
      lighting
    }
  }
}

export default api