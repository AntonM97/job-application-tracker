package com.anton.jobapplication.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping({"/", "/kanban-board"})
    public String kanbanBoard() {
        return "kanban-board";
    }

    @GetMapping("/statistics")
    public String statistics() {
        return "statistics";
    }
}
