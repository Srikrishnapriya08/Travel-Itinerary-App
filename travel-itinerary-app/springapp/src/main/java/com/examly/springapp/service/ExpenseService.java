// package com.examly.springapp.service;

// import com.examly.springapp.model.ExpenseEntity;
// import com.examly.springapp.repository.ExpenseRepository;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;

// @Service
// public class ExpenseService {

//     private final ExpenseRepository expenseRepository;

//     public ExpenseService(ExpenseRepository expenseRepository) {
//         this.expenseRepository = expenseRepository;
//     }

//     public ExpenseEntity addExpense(ExpenseEntity expense) {
//         return expenseRepository.save(expense);
//     }

//     public List<ExpenseEntity> getAllExpenses() {
//         return expenseRepository.findAll();
//     }

//     public Optional<ExpenseEntity> getExpenseById(Long id) {
//         return expenseRepository.findById(id);
//     }

//     public ExpenseEntity updateExpense(Long id, ExpenseEntity expenseDetails) {
//         return expenseRepository.findById(id).map(expense -> {
//             expense.setAmount(expenseDetails.getAmount());
//             expense.setCurrency(expenseDetails.getCurrency());
//             expense.setCategory(expenseDetails.getCategory());
//             expense.setPaymentMethod(expenseDetails.getPaymentMethod());
//             expense.setDescription(expenseDetails.getDescription());
//             return expenseRepository.save(expense);
//         }).orElseThrow(() -> new RuntimeException("Expense not found"));
//     }

//     public void deleteExpense(Long id) {
//         expenseRepository.deleteById(id);
//     }
// }
package com.examly.springapp.service;

import com.examly.springapp.dto.ExpenseDTO;
import com.examly.springapp.model.ExpenseEntity;
import com.examly.springapp.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;

    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    private ExpenseDTO toDTO(ExpenseEntity expense) {
        ExpenseDTO dto = new ExpenseDTO();
        dto.setId(expense.getId());
        dto.setAmount(expense.getAmount());
        dto.setCurrency(expense.getCurrency());
        dto.setCategory(expense.getCategory().name());
        dto.setPaymentMethod(expense.getPaymentMethod().name());
        dto.setDescription(expense.getDescription());
        dto.setCreatedDate(expense.getCreatedDate());
        return dto;
    }

    private ExpenseEntity toEntity(ExpenseDTO dto) {
        ExpenseEntity expense = new ExpenseEntity();
        expense.setId(dto.getId());
        expense.setAmount(dto.getAmount());
        expense.setCurrency(dto.getCurrency());
        expense.setCategory(ExpenseEntity.Category.valueOf(dto.getCategory()));
        expense.setPaymentMethod(ExpenseEntity.PaymentMethod.valueOf(dto.getPaymentMethod()));
        expense.setDescription(dto.getDescription());
        expense.setCreatedDate(dto.getCreatedDate());
        return expense;
    }

    public List<ExpenseDTO> getAllExpenses() {
        return expenseRepository.findAll().stream().map(this::toDTO).collect(Collectors.toList());
    }

    public Optional<ExpenseDTO> getExpenseById(Long id) {
        return expenseRepository.findById(id).map(this::toDTO);
    }

    public ExpenseDTO addExpense(ExpenseDTO dto) {
        return toDTO(expenseRepository.save(toEntity(dto)));
    }

    public ExpenseDTO updateExpense(Long id, ExpenseDTO dto) {
        return expenseRepository.findById(id)
                .map(expense -> {
                    expense.setAmount(dto.getAmount());
                    expense.setCurrency(dto.getCurrency());
                    expense.setCategory(ExpenseEntity.Category.valueOf(dto.getCategory()));
                    expense.setPaymentMethod(ExpenseEntity.PaymentMethod.valueOf(dto.getPaymentMethod()));
                    expense.setDescription(dto.getDescription());
                    return toDTO(expenseRepository.save(expense));
                }).orElseThrow(() -> new RuntimeException("Expense not found with id " + id));
    }

    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }
}